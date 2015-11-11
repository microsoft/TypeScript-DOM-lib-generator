#load "Shared.fsx"

open System
open System.IO
open System.Text
open System.Collections.Generic
open Shared

// Global Pt.print target
let Pt = StringPrinter()

// When emit webworker interfaces dom types are ignored
let mutable ignoreDomType = false

/// Return a stringbuilder
let LoadTemplate path =
    (new StringBuilder()).Append(File.ReadAllText path)

let DomTypeToPrimitiveJsType domType =
    match domType with
    | "AbortMode" -> "String"
    | "any" -> "Object"
    | "ArrayBuffer" -> "ArrayBuffer"
    | "ArrayBufferView" -> "Uint8Array"
    | "bool" -> "Boolean"
    | "boolean" -> "Boolean"
    | "Boolean" -> "Boolean"
    | "CanvasPixelArray" -> "UInt8ClampedArray"
    | "Date" -> "Date"
    | "DOMHighResTimeStamp" -> "Number"
    | "DOMString" -> "String"
    | "DOMTimeStamp" -> "Number"
    | "double" -> "Number"
    | "EndOfStreamError" -> "Number"
    | "EventHandler" -> "Function"
    | "float" -> "Number"
    | "Float32Array" -> "Float32Array"
    | "Function" -> "Function"
    | "Int32Array" -> "Int32Array"
    | "long long" -> "Number"
    | "long" -> "Number"
    | "object" -> "Object"
    | "ReadyState" -> "Number"
    | "short" -> "Number"
    | "signed long" -> "Number"
    | "signed long long" -> "Number"
    | "signed short" -> "Number"
    | "Uint8Array" -> "Uint8Array"
    | "UnrestrictedDouble" -> "Number"
    | "unsigned long" -> "Number"
    | "unsigned long long" -> "Number"
    | "unsigned short" -> "Number"
    | "void" -> "undefined"
    | _ -> ""
    |> (fun x -> if x <> "" then Some x else None)

/// Get javascript type using object dom type
let DomTypeToJsType objDomType = 
    match DomTypeToPrimitiveJsType objDomType with
    | Some jsType -> jsType
    | None ->
        match objDomType with
        // Todo: remove this after the definition of "WindowProxy" has been added to the spec
        | "WindowProxy" -> "Window"
        | domType when domType.Contains("Promise") -> "Promise"
        | arrayType when arrayType.StartsWith("sequence") -> "Array"
        | _ -> 
            if ignoreDomType && Seq.contains objDomType ["Element"; "Window"; "Document"] then "Object"
            else
                // Check if it is interface
                match GetInterfaceByName objDomType with
                | Some i -> objDomType
                | None -> 
                    // Check if it is dictionary
                    match allDictionariesMap.TryFind objDomType with
                    | Some d -> objDomType
                    | None ->
                        match allCallbackFuncs.TryFind objDomType with
                        | Some cb -> objDomType
                        | None->
                            // Check if it is enum (namely string)
                            match allEnumsMap.TryFind objDomType with
                            | Some e -> "String"
                            | None -> "Object"

/// Get default values for primitive js types
let GetJsTypeDefaultValue jsType = 
    match jsType with
    | "Number" -> "0"
    | "Boolean" -> "false"
    | "String" -> "''"
    | "Function" -> "function() {}"
    | "Object" -> "{}"
    | "undefined" -> "undefined"
    | "Promise" -> "new Promise(function(resolve, reject) { })"
    // many methods and properties are declared to return Element but in fact return HTMLElement-derived objects.
    | "Element" -> "HTMLElement" 
    | "Array" -> "[]"
    | _ -> ""
    |> (fun x -> if x <> "" then Some x else None)

let GetElementTypeForArray (input : string) =
    if DomTypeToJsType input <> "Array" then raise (Exception "Bot an array type!")
    // so the input string starts with "sequence<"
    DomTypeToJsType (input.Substring(9, input.Length - 10))

let GetDefaultValue jsType = 
    let (|HasJsDefaultValue|_|) str = GetJsTypeDefaultValue str
    let (|InterfaceName|_|) str = GetInterfaceByName str
    let (|DictionaryName|_|) str = allDictionariesMap.TryFind str
    
    match jsType with
    | HasJsDefaultValue defaultValue -> defaultValue
    | InterfaceName i -> i.Name
    | DictionaryName d -> d.Name
    | other -> "new " + other + "()"

let GetJsDefaultValueForDomType (domType:string) = domType |> DomTypeToJsType |> GetDefaultValue

/// Emit event handlers that associated with an interface
let EmitEvents (i:Browser.Interface) = 
    match iNameToEhList.TryFind i.Name with
    | Some ehList ->
        ehList
        |> List.map (fun e -> "\"" + e.Name + "\"")
        |> (fun x -> 
            if x.Length > 0 then 
                if i.Name.EndsWith("GlobalScope") then
                    x |> List.iter (fun eName -> Pt.printl "%s.%s = function () {};" i.Name (eName.Trim('\"')))
                else
                    Pt.printl "_events(%s, %s);" i.Name (String.Join(", ", x)) 
            else ())
    | None -> ()

let EmitProperties flavor (i:Browser.Interface) =
    let propNameToElmentMap = function
        | "images" -> Some "img"
        | "rows" -> Some "tr"
        | "cells" -> Some "td"
        | "scripts" -> Some "script"
        | "applets" -> Some "applet"
        | "forms" -> Some "form"
        | "embeds" -> Some "embed"
        | "links" | "anchors" -> Some "a"
        | "options" -> Some "option"
        | "tBodies" -> Some "tbody"
        | _ -> None

    let EmitProperty (p: Browser.Property) =
        let value = p.Type |> DomTypeToJsType |> GetDefaultValue
        match p with
        | _ when p.Type = "EventHandler" -> ()
        | _ -> 
            match p.Name, i.Name with
            | "nodeType", "Node" -> 
                Pt.printl "Node.nodeType = 1;"
            | "ownerDocument", _ | "contentDocument", _ ->
                Pt.printl "%s.%s = document;" i.Name p.Name
            | pName, _ when Seq.contains pName ["firstChild";"lastChild";"childNodes";"firstElementChild";"lastElementChild";"nextElementSibling";"previousElementSibling";"parentElement"] ->
                Pt.printl "Object.defineProperty(%s,\"%s\", { get: function () { return _%s(this, %s); } });" i.Name p.Name p.Name value
            | "childElementCount", _ -> 
                Pt.printl "Object.defineProperty(%s,\"%s\", { get: function () { return _childElementCount(this); } });" i.Name p.Name
            | "elements", "HTMLFormElement" -> 
                Pt.printl "Object.defineProperty(%s,\"%s\", { get: function () { return _formElements(this); } });" i.Name p.Name
            | "options", "HTMLSelectElement" -> 
                Pt.printl "Object.defineProperty(%s,\"%s\", { get: function () { return _selectOptions(this); } });" i.Name p.Name
            | "innerHTML", _ -> 
                Pt.printl "Object.defineProperty(%s,\"%s\", { get: function () { return ''; }, set: function (v) { _setInnerHTML(this, v); } });" i.Name p.Name
            | pName, _ when (propNameToElmentMap pName).IsSome && p.Type = "HTMLCollection" ->
                Pt.printl "%s.%s = _createHTMLCollection('%s');" i.Name pName (propNameToElmentMap pName).Value
            | pName, iName 
                when iName = value || 
                ((allInterfacesMap.ContainsKey p.Type) && IsDependsOn p.Type i.Name) -> 
                Pt.printl "%s.%s = _$getTrackingNull(Object.create(%s));" i.Name p.Name value
            | _, _ -> 
                Pt.printl "%s.%s = %s;" i.Name p.Name value

    match i.Properties with
    | Some propCollection -> 
        propCollection.Properties
        |> Array.filter (ShouldKeep flavor)
        |> Array.iter EmitProperty 
    | None -> ()

let EmitConstants suffix (i:Browser.Interface) =
    match i.Constants with
    | Some cCollection -> 
        for c in cCollection.Constants do
            let cJsType = DomTypeToJsType c.Type
            match cJsType with
            | "String" -> Pt.printl "%s%s.%s = \"%s\";" i.Name suffix c.Name c.Value.Value
            | _ -> Pt.printl "%s%s.%s = %s;" i.Name suffix c.Name c.Value.Value
    | None -> ()

let EmitSignatureCommentDocs (jsFunction:Function) =
    let EmitSignatureDocForSingleParam (p: Param) =
        let pJsType = DomTypeToJsType p.Type

        (sprintf "/// <param name='%s' type='%s'" p.Name pJsType) +
        (if pJsType = "Array" then sprintf " elementType='%s' " (GetElementTypeForArray p.Type) else "") +
        (if p.Optional then " optional='true' " else "" ) + "/>"
        |> Pt.printl "%s"
        
    let EmitSignatureDocForSingleOverload (ol: Overload) =
        if not ol.IsEmpty then
            Pt.increaseIndent()
            match ol.ReturnTypes.Length with
            | 0 ->
                Pt.printl "/// <signature>"
                ol.ParamCombinations |> List.iter EmitSignatureDocForSingleParam
                Pt.printl "/// </signature>"
            | 1 ->
                Pt.printl "/// <signature>"
                ol.ParamCombinations |> List.iter EmitSignatureDocForSingleParam
                match ol.ReturnTypes.[0] with
                | "void" | "" -> ()
                | arrayType when arrayType.StartsWith("sequence<") -> Pt.printl "/// <returns type='Array' elementType='%s'/>" (GetElementTypeForArray arrayType)
                | _ -> Pt.printl "/// <returns type='%s'/>" (DomTypeToJsType ol.ReturnTypes.[0])
                Pt.printl "/// </signature>"
            | _ ->
                ol.ReturnTypes
                |> List.iter 
                    (fun r -> 
                        Pt.printl "/// <signature>"
                        ol.ParamCombinations |> List.iter EmitSignatureDocForSingleParam
                        match r with
                        | "void" | "" -> ()
                        | arrayType when arrayType.StartsWith("sequence<") -> Pt.printl "/// <returns type='Array' elementType='%s'/>" (GetElementTypeForArray arrayType)
                        | _ -> Pt.printl "/// <returns type='%s'/>" (DomTypeToJsType r)
                        Pt.printl "/// </signature>"
                    )
            Pt.decreaseIndent()
        else ()
    
    let overloads = GetOverloads jsFunction true
    if not overloads.IsEmpty then List.iter EmitSignatureDocForSingleOverload overloads

let EmitMethods (i:Browser.Interface) =
    let EmitMethod (m:Browser.Method) =
        // print declaration
        let paramsStr = String.concat ", " [for p in m.Params do yield AdjustParamName p.Name]
        Pt.printl "%s.%s = function(%s) {" i.Name m.Name.Value paramsStr
        // print comment docs
        EmitSignatureCommentDocs (Method m)
        // print body
        match i.Name, m.Name.Value with
        | "EventTarget", "addEventListener" -> Pt.printWithAddedIndent "_eventManager.add(this, type, listener);"
        | _, "insertAdjacentHTML" -> Pt.printWithAddedIndent "_setInnerHTML(this, html);"
        | _, "removeChild" -> Pt.printWithAddedIndent "return _removeChild(this, oldChild);"
        | _, "appendChild" -> Pt.printWithAddedIndent "return _appendChild(this, newChild);"
        | _, "hasChildNodes" -> Pt.printWithAddedIndent "return _hasChildNodes(this);"
        | _, "replaceChild" -> Pt.printWithAddedIndent "return _replaceChild(this, newChild, oldChild);"
        | _, "insertBefore" -> Pt.printWithAddedIndent "return _insertBefore(this, newChild, refChild);"
        | _, "querySelectorAll" -> Pt.printWithAddedIndent "return _querySelectorAll(this, selectors);"
        | _, "querySelector" -> Pt.printWithAddedIndent "return _querySelector(this, selectors);"
        | _, "getAttribute" ->
            Pt.printWithAddedIndent "return _getAttribute(this, name);"
        | _, "setAttribute" ->
            Pt.printWithAddedIndent "_setAttribute(this, name, value);"
        | _, "hasAttribute" ->
            Pt.printWithAddedIndent "return _hasAttribute(this, name);"
        | _, "createEvent" ->
            Pt.printWithAddedIndent "return _createEvent(%s);" m.Params.[0].Name
        | _, "createElement" ->
            Pt.printWithAddedIndent "return _createElementByTagName(%s);" m.Params.[0].Name
        | "Document", "msElementsFromPoint" | "Document", "msElementsFromRect" ->
            Pt.printWithAddedIndent "return _wrapInList([Object.create(HTMLElement)], NodeList);"
        | "Document", "write" | "Document", "writeln" ->
            Pt.printWithAddedIndent "_setInnerHTML(this, content);"
        | _, "getElementsByTagName" ->
            Pt.printWithAddedIndent "return _getElementsByTagName(this, %s);" m.Params.[0].Name
        | _, "replaceNode" ->
            Pt.printWithAddedIndent "return _replaceChild(this, %s, this);" m.Params.[0].Name
        | _, "applyElement" ->
            Pt.printWithAddedIndent "return _applyElement(this, %s, %s);" m.Params.[0].Name m.Params.[1].Name
        | _, "getElementById" ->
            Pt.printWithAddedIndent "return _getElementById(%s);" m.Params.[0].Name
        | "WindowTimersExtension", "setImmediate" | "WindowTimersExtension", "msSetImmediate" ->
            Pt.printWithAddedIndent "return _$setTimeout(expression, null, args);"
        | "WorkerUtils", "setImmediate" ->
            Pt.printWithAddedIndent "return _$setTimeout(handler, 0, args);"
        | _, "clearImmediate" | "WindowTimersExtension", "msClearImmediate" | _, "clearTimeout" ->
            Pt.printWithAddedIndent "_$clearTimeout(%s);" m.Params.[0].Name
        | "WorkerUtils", "importScripts" ->
            Pt.printWithAddedIndent "for (var i = 0; i < arguments.length; i++) _$asyncRequests.add({ src: arguments[i] });"
        | "IDBCursor", "delete" ->
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, undefined);"
        | "IDBCursor", "update" ->
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, value);"
        | "IDBIndex", "count" ->
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, 0);"
        | "IDBIndex", "getKey" ->
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this.objectStore, {});"
        | "IDBIndex", "openKeyCursor" ->
            Pt.printWithAddedIndent "var cursor = Object.create(IDBCursor); cursor.source = this; return _createIDBRequest(IDBRequest, this.objectStore, cursor);"
        | "IDBIndex", "get" ->
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this.objectStore, {});"
        | "IDBIndex", "openCursor" ->
            Pt.printWithAddedIndent "var cursor = Object.create(IDBCursorWithValue); cursor.source = this; return _createIDBRequest(IDBRequest, this, cursor);"
        | "IDBFactory", "open" ->
            Pt.printWithAddedIndent "return _createIDBRequest(IDBOpenDBRequest, null, Object.create(IDBDatabase));"
        | "IDBFactory", "deleteDatabase" ->
            Pt.printWithAddedIndent "return _createIDBRequest(IDBOpenDBRequest, null, null);"
        | "IDBObjectStore", "count" -> 
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, 0);"
        | "IDBObjectStore", "add" -> 
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, key);"
        | "IDBObjectStore", "clear" -> 
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, undefined);"
        | "IDBObjectStore", "put" -> 
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, key);"
        | "IDBObjectStore", "openCursor" -> 
            Pt.printWithAddedIndent "var cursor = Object.create(IDBCursorWithValue); cursor.source = this; return _createIDBRequest(IDBRequest, this, cursor);"
        | "IDBObjectStore", "get" -> 
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, {});"
        | "IDBObjectStore", "delete" -> 
            Pt.printWithAddedIndent "return _createIDBRequest(IDBRequest, this, undefined);"
        | _, "setTimeout" | _, "setInterval" ->
            Pt.printWithAddedIndent "return _$setTimeout(handler, timeout, args);"
        | _, "clearInterval" ->
            Pt.printWithAddedIndent "_$clearTimeout(handle);"
        | "XMLHttpRequest", "send" ->
            Pt.printWithAddedIndent "this.status = 200; this.readyState = XMLHttpRequest.DONE; this.status = 4; this.statusText = \"OK\";"
        | "HTMLCanvasElement", "getContext" ->
            Pt.printWithAddedIndent "switch (contextId) { case '2d': return CanvasRenderingContext2D; case 'experimental-webgl': return WebGLRenderingContext; default: return {}; }"
        | _, _ ->
            match m.Type with
            |"void" -> ()
            | _ -> 
                if (i.Name.EndsWith("List") || i.Name.EndsWith("Collection")) && (OptionCheckValue "item" m.Name) then
                    match DomTypeToPrimitiveJsType m.Type with
                    | Some jsType -> Pt.printWithAddedIndent "return this[index] || _$getTrackingNull(%s);" ((GetJsTypeDefaultValue jsType).Value)
                    | _ -> Pt.printWithAddedIndent "return this[index] || _$getTrackingNull(Object.create(%s));" (GetJsDefaultValueForDomType m.Type)
                else
                    Pt.printWithAddedIndent "return %s;" (GetJsDefaultValueForDomType m.Type)
        // print last line
        Pt.printl "};"

    match i.Methods with
    | Some ms -> Seq.iter EmitMethod ms.Methods
    | _ -> ()

    // Explicitly expose 'toString' method for 'window'
    // because the method is inherited from js "Object"
    // but it wouldn't show up at the top level if it is 
    // not the window's own property
    if i.Name = "Window" then
        Pt.print "
    Window.toString = function() { 
	    /// <signature>
	    /// <returns type='String'/>
	    /// </signature>
	    return ''; 
    };"

let EmitInterfaceInit (i:Browser.Interface) =
    let nodeType, nodeName = 
        match i.Name with
        | "Text" -> "TEXT_NODE", "#text"
        | "Comment" -> "COMMENT_NODE", "#comment"
        | "CDATASection" -> "CDATA_SECTION_NODE", "#cdata-section"
        | "ProcessingInstruction" -> "PROCESSING_INSTRUCTION_NODE", ""
        | "DocumentFragment" -> "DOCUMENT_FRAGMENT_NODE", "#document-fragment"
        | "DocumentType" -> "DOCUMENT_TYPE_NODE", "html"
        | _ -> "", ""
    match nodeType, nodeName with
    | "", "" -> 
        if i.Elements.Length > 0 then
            let firstElem = i.Elements.[0].Name
            Pt.printl "%s.nodeName = %s.tagName = '%s';" i.Name i.Name (firstElem.ToUpper())
            Pt.printl "%s.localName = '%s';" i.Name (firstElem.ToLower())
    | _, "" ->
        Pt.printl "%s.nodeType = Node.%s;" i.Name nodeType
    | _, _ ->
        Pt.printl "%s.nodeType = Node.%s;" i.Name nodeType
        Pt.printl "%s.nodeName = '%s';" i.Name nodeName
/// Sort interfaces to make base interfaces locate before inherited ones
let SortInterfaces (iAray:Browser.Interface []) =
    let tSet = HashSet (iAray)

    let IsIndependentFromAny (ts:seq<Browser.Interface>) (t:Browser.Interface) =
        not (Seq.exists (fun (element:Browser.Interface) -> IsDependsOn t.Name element.Name) ts)

    let findIndependentInterfaces tArray =
        tArray |> Seq.filter (IsIndependentFromAny tArray)
        
    let resArray = ResizeArray<Browser.Interface>()

    while not (tSet.Count = 0) do
        let independentTypes = findIndependentInterfaces tSet
        if Seq.isEmpty independentTypes then
            raise (Exception "Cyclic dependencies between types detected!")
        else
            let indeArray = Array.ofSeq independentTypes
            resArray.AddRange indeArray
            tSet.ExceptWith indeArray
    resArray.ToArray()

let SortDicts (ds: Browser.Dictionary []) =
    let dSet = HashSet (ds)

    let IsIndependentFromAny (ts:seq<Browser.Dictionary>) (t:Browser.Dictionary) =
        not (Seq.exists (fun (element:Browser.Dictionary) -> IsDependsOn t.Name element.Name) ts)

    let findIndependentInterfaces tArray =
        tArray |> Seq.filter (IsIndependentFromAny tArray)
        
    let resArray = ResizeArray<Browser.Dictionary>()

    while not (dSet.Count = 0) do
        let independentTypes = findIndependentInterfaces dSet
        if Seq.isEmpty independentTypes then
            raise (Exception "Cyclic dependencies between types detected!")
        else
            let indeArray = Array.ofSeq independentTypes
            resArray.AddRange indeArray
            dSet.ExceptWith indeArray
    resArray.ToArray()

let RegisterPublicInterfaces flavor =
    // The order of the publicInterface registration need to be reverse of the dependency relationship
    // e.g. base interfaces show up later than inherited interfaces
    let sortedIs = GetPublicInterfacesByFlavor flavor |> SortInterfaces |> Array.rev
    for i in sortedIs do
        // Static interfaces are objects
        match i.Static.IsSome with
        | true -> 
            Pt.printl "_publicObject('%s', %s);" i.Name i.Name
        | false ->
            if  i.Constructor.IsNone && 
                i.NoInterfaceObject.IsNone then
                    Pt.printl "_publicInterface('%s', {" i.Name

                    // Emit constants
                    let cEmit = 
                        match i.Constants with 
                        | Some (cs) -> 
                            [for c in cs.Constants do 
                                yield "'" + c.Name + "' : " + c.Value.String.Value] 
                        | _ -> []

                    // Emit static methods
                    let mEmit = 
                        match i.Methods with
                        | Some (ms) -> 
                            [for m in ms.Methods do 
                                if m.Static.IsSome then
                                    yield String.Format("'{0}' : {1}.{0}", m.Name.Value, i.Name)] 
                        | _ -> []

                    let combined = String.concat "," (List.append cEmit mEmit)
                    Pt.print "%s" (combined.Trim(','))
                    Pt.print "}, %s);" i.Name

let RegisterConstructors flavor =
    let sortedCtors = GetAllInterfacesByFlavor flavor |> SortInterfaces |> Array.rev
    for i in sortedCtors do
        match i.Constructor with
        | Some _ -> Pt.printl "_publicInterface('%s', %sCtor , %s);" i.Name i.Name i.Name
        | _ -> ()

let EmitConstructor (i: Browser.Interface) =
    match i.Constructor with
    | Some _ -> EmitConstants "Ctor" i
    | None -> ()

let EmitInterface flavor (i:Browser.Interface) =
    Pt.printl ""
    Pt.printl "/* -- type: %s -- */" i.Name
    Pt.printl ""

    // Emit impletented interfaces
    i.Implements |> Array.iter (fun im -> Pt.printl "_$implement(%s, %s);" i.Name im)
    if i.Name = GetGlobalPollutorName flavor then
        // if the interface is the global pollutor, inherits becomes implements
        Pt.printl "_$implement(%s, %s);" i.Name i.Extends

    // Emit other contents
    EmitConstructor i
    EmitProperties flavor i
    EmitConstants "" i
    EmitMethods i
    EmitInterfaceInit i
    EmitEvents i

    // Deal with array types
    if i.Name.EndsWith("List") || i.Name.EndsWith("Collection") then
        match i.Methods with
        | Some ms -> 
            let item = Array.tryFind (fun (m:Browser.Method) -> m.Name.Value = "item") ms.Methods
            match item with
            | Some item ->
                Pt.printl "/* Add a single array element */"
                match DomTypeToPrimitiveJsType item.Type with
                | Some jsType -> Pt.printl "%s[0] = _$getTrackingNull(%s);" i.Name ((GetJsTypeDefaultValue jsType).Value)
                | None -> Pt.printl "%s[0] = _$getTrackingNull(Object.create(%s));" i.Name (GetJsDefaultValueForDomType item.Type)
            | None -> ()
        | None -> ()

let EmitCallBackFunctions flavor =
    let EmitCallBackFunction (cb: Browser.CallbackFunction) =
        let paramsStr = cb.Params |> Array.map (fun p -> p.Name) |> String.concat ", "
        Pt.printl "var %s = function(%s) {" cb.Name paramsStr
        EmitSignatureCommentDocs (CallBackFun cb)
        if cb.Type <> "void" then Pt.printWithAddedIndent "return %s;" (DomTypeToJsType cb.Type)
        Pt.printl "};"
    GetCallbackFuncsByFlavor flavor
    |> Array.iter EmitCallBackFunction

let RegisterCallBackFunctions flavor =
    let RegisterCallBackFunction (cb: Browser.CallbackFunction) =
        Pt.printl "_publicInterface('%s', {}, %s);" cb.Name cb.Name
    browser.CallbackFunctions 
    |> Array.filter (ShouldKeep flavor)
    |> Array.iter RegisterCallBackFunction

let RegisterDictionaries () =
    let RegisterDictionary (d: Browser.Dictionary) =
        Pt.printl "_publicInterface('%s', {}, %s);" d.Name d.Name

    browser.Dictionaries
    |> Array.iter RegisterDictionary
 
let EmitDictionaries () =
    let EmitDictionary (d:Browser.Dictionary) =
        Pt.printl ""
        Pt.printl "/* -- type: %s -- */" d.Name
        Pt.printl ""

        // Emit members 
        for m in d.Members do
            let defaultValue = match m.Default.String with
                               | Some dv -> dv
                               | None -> GetJsDefaultValueForDomType m.Type
            Pt.printl "%s.%s = %s;" d.Name m.Name defaultValue

    browser.Dictionaries |> Array.iter EmitDictionary

let EmitInterfaces flavor =
    let sortedTypes = SortInterfaces (GetAllInterfacesByFlavor flavor)
    for t in sortedTypes do EmitInterface flavor t

let EmitEventTypeToObjSwitchStatement flavor ignoreCase =
    Pt.printl "switch (type) {"
    Pt.increaseIndent()
    
    match flavor with
    | Worker ->
        for KeyValue(eName, eType) in workerEventsMap do
            Pt.printl "case '%s': return %s;" eName eType
    | _ ->
        // Note: 
        // in the XML file, the event handler name and the event name it handles 
        // doesn't just differ by a "on" prefix. for example, 
        // <property event-handler="SVGZoom" name="onzoom" type="EventHandler"/>
        // this event handler handles event "SVGZoom". But, we need to provide intellisense 
        // for both "SVGZoom" and "zoom" event in the VS intellisense. Therefore 
        // both of them should be in the switch case statement.
        // The "SVGZoom" event is included in the global eNameToEType map;
        for KeyValue(eName, eType) in eNameToEType do
            let eNameCaseSensitive = if ignoreCase then eName.ToLower() else eName
            Pt.printl "case '%s': return %s;" eNameCaseSensitive eType

        // while the fake "zoom" event can only be generated on the fly.
        for KeyValue(ehName, eType) in ehNameToEType do
            let ehNameTrimOn = if ignoreCase then (ehName.TrimStartString "on").ToLower() else ehName.TrimStartString "on"
            if not (eNameToETypeWithoutCase.ContainsKey(ehNameTrimOn.ToLower())) then
                Pt.printl "case '%s': return %s;" ehNameTrimOn eType
            
    Pt.decreaseIndent()
    Pt.printl "}"

let EmitGetElementByTagNameSwitchStatement () =
    Pt.printl "switch (tagName.toLowerCase()) {"

    Pt.increaseIndent()
    for KeyValue(tagName, eleName) in tagNameToEleName do 
        Pt.printl "case '%s': return %s;" tagName eleName
    Pt.printl "default: return HTMLElement;"
    Pt.decreaseIndent()

    Pt.print "}"

/// Emit the _createEvent function
let EmitCreateEventSwitchStatement () =
    // Emit the switch statements
    Pt.printl "switch(eventType.toLowerCase()) {"

    distinctETypeList
    |> List.iter 
        (fun e -> 
            Pt.printWithAddedIndent "case '%s': return %s;" (e.ToLower()) e
            Pt.printWithAddedIndent "case '%ss': return %s;" (e.ToLower()) e)

    allWebNonCallbackInterfaces
    |> Array.filter (fun (i:Browser.Interface) -> 
                        i.Name.EndsWith("Event") &&
                        not (Seq.contains i.Name distinctETypeList))
    |> Array.iter 
        (fun i -> 
            Pt.printWithAddedIndent "case '%s': return %s;" (i.Name.ToLower()) i.Name
            Pt.printWithAddedIndent "case '%ss': return %s;" (i.Name.ToLower()) i.Name)

    Pt.printl "}"

let EmitDeclarations flavor =
    let EmitInterfaceDeclaration (i:Browser.Interface) =
        let init = 
            match i.Name with
            | name when name = GetGlobalPollutorName flavor -> "this"
            | _ when i.Extends = "Object" -> "{}"
            | _ -> "_$inherit(" + i.Extends + ")"

        Pt.printl "var %s = %s;" i.Name init

        match i.Constructor with
        | Some ctor -> 
            let functionDeclare = 
                match ctor.Params with
                | [||] -> "function()"
                | _ -> 
                    let pList = ctor.Params |> Array.map (fun p -> p.Name) |> String.concat ", "
                    "function(" + pList + ")"
            Pt.printl "var %sCtor = %s { " i.Name functionDeclare
            if ctor.Params.Length > 0 then
                EmitSignatureCommentDocs (Ctor ctor)
                Pt.printWithAddedIndent "return Object.create(%s);" i.Name
                Pt.printl "};"
            else
                Pt.print "return Object.create(%s); };" i.Name
        | None -> ()


    GetAllInterfacesByFlavor flavor 
    |> SortInterfaces
    |> Array.iter EmitInterfaceDeclaration

    if flavor <> Worker then
        let EmitDictDeclaration (d: Browser.Dictionary) =
            match d.Extends with
            | "Object" -> Pt.printl "var %s = {};" d.Name
            | _ -> Pt.printl "var %s = _$inherit(%s);" d.Name d.Extends
        browser.Dictionaries 
        |> SortDicts
        |> Array.iter EmitDictDeclaration
    
let EmitXmlContent flavor =
    EmitDeclarations flavor
    EmitCallBackFunctions flavor
    EmitInterfaces flavor
    if flavor <> Worker then
        EmitDictionaries ()


let RegisterPublicObjs flavor =
    RegisterPublicInterfaces flavor
    RegisterConstructors flavor

/// Adjust the indention of the printer, and emit the indented content in the printer,
/// and then replace the place holder text with the content in printer
let ReplaceWithIndentedFuncResult (placeHolder: String) func (sb: StringBuilder) =
    let curText = sb.ToString()
    let phStartPos = curText.IndexOf(placeHolder)
    let lineStartPos = curText.LastIndexOf('\n', phStartPos)
    Pt.setIndent ((phStartPos - lineStartPos) / 4)
    Pt.clear()
    func() |> ignore
    sb.Replace(placeHolder, Pt.getResult())

let EmitTheWholeThing flavor (target: TextWriter) = 
    Pt.reset()

    let template = LoadTemplate ( __SOURCE_DIRECTORY__ +  @"\inputfiles\jsTemplate.js")

    let content =
        template 
        |> ReplaceWithIndentedFuncResult "<@ EventTypeToObjSwitchStatements @>" 
            (fun () -> EmitEventTypeToObjSwitchStatement flavor false)
        |> ReplaceWithIndentedFuncResult "<@ EventTypeToObjSwitchStatementsIgnoreCase @>"
            (fun () -> EmitEventTypeToObjSwitchStatement flavor true)
        |> ReplaceWithIndentedFuncResult "<@ CreateEventSwitchStatements @>" 
            EmitCreateEventSwitchStatement
        |> ReplaceWithIndentedFuncResult "<@ GetElementsByTagNameSwitchStatements @>" 
            EmitGetElementByTagNameSwitchStatement
        |> ReplaceWithIndentedFuncResult "<@ XMLContents @>"    
            (fun () -> EmitXmlContent flavor)
        |> ReplaceWithIndentedFuncResult "<@ Public Interfaces @>" 
            (fun () -> RegisterPublicObjs flavor)
        |> (fun sb -> sb.Replace("<@ GlobalPolluter @>", GetGlobalPollutorName flavor))
        |> (fun sb -> sb.ToString())
    
    fprintf target "%s" content
    target.Flush()
    target.Close()

let EmitDomWeb () = 
    EmitTheWholeThing Flavor.Web GlobalVars.jsWebOutput

let EmitDomWin () = 
    EmitTheWholeThing Flavor.All GlobalVars.jsWinOutput

let EmitDomWorker () = 
    Pt.reset()

    ignoreDomType <- true
    let template = LoadTemplate ( __SOURCE_DIRECTORY__ +  @"\inputfiles\jsTemplate_worker.js")

    let content =
        template 
        |> ReplaceWithIndentedFuncResult "<@ EventTypeToObjSwitchStatements @>" 
            (fun () -> EmitEventTypeToObjSwitchStatement Worker false)
        |> ReplaceWithIndentedFuncResult "<@ XMLContents @>"    
            (fun () -> EmitXmlContent Worker)
        |> ReplaceWithIndentedFuncResult "<@ Public Interfaces @>" 
            (fun () -> RegisterPublicObjs Worker)
        |> (fun sb -> sb.Replace("<@ GlobalPolluter @>", GetGlobalPollutorName Worker))
        |> (fun sb -> sb.ToString())
    
    fprintf GlobalVars.jsWorkerOutput "%s" content
    GlobalVars.jsWorkerOutput.Flush()