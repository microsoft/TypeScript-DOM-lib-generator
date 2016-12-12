#load "Shared.fsx"

open System
open System.Text.RegularExpressions
open Shared
open Shared.Comments
open Shared.JsonItems
open System.IO
open System.Web

// Global print target
let Pt = StringPrinter()

// When emit webworker types the dom types are ignored
let mutable ignoreDOMTypes = false

// Extended types used but not defined in the spec
let extendedTypes =
    ["ArrayBuffer";"ArrayBufferView";"Int8Array";"Uint8Array";"Int16Array";"Uint16Array";"Int32Array";"Uint32Array";"Float32Array";"Float64Array"]

/// Get typescript type using object dom type, object name, and it's associated interface name
let rec DomTypeToTsType (objDomType: string) =
    match objDomType.Trim('?') with
    | "AbortMode" -> "String"
    | "any" -> "any"
    | "bool" | "boolean" | "Boolean" -> "boolean"
    | "CanvasPixelArray" -> "number[]"
    | "Date" -> "Date"
    | "DOMHighResTimeStamp" -> "number"
    | "DOMString" -> "string"
    | "DOMTimeStamp" -> "number"
    | "EndOfStreamError" -> "number"
    | "EventListener" -> "EventListenerOrEventListenerObject"
    | "double" | "float" -> "number"
    | "Function" -> "Function"
    | "long" | "long long" | "signed long" | "signed long long" | "unsigned long" | "unsigned long long" -> "number"
    | "octet" | "byte" -> "number"
    | "object" -> "any"
    | "Promise" -> "Promise"
    | "ReadyState" -> "string"
    | "sequence" -> "Array"
    | "short" | "signed short" | "unsigned short" -> "number"
    | "UnrestrictedDouble" -> "number"
    | "void" -> "void"
    | extendedType when List.contains extendedType extendedTypes -> extendedType
    | _ ->
        if ignoreDOMTypes && Seq.contains objDomType ["Element"; "Window"; "Document"] then "any"
        else
            // Name of an interface / enum / dict. Just return itself
            if allInterfacesMap.ContainsKey objDomType ||
                allCallbackFuncs.ContainsKey objDomType ||
                allDictionariesMap.ContainsKey objDomType then
                objDomType
            // Name of a type alias. Just return itself
            elif typeDefSet.Contains objDomType then objDomType
            // Enum types are all treated as string
            elif allEnumsMap.ContainsKey objDomType then "string"
            // Union types
            elif objDomType.Contains(" or ") then
                let allTypes = objDomType.Trim('(', ')').Split([|" or "|], StringSplitOptions.None)
                                |> Array.map (fun t -> DomTypeToTsType (t.Trim('?', ' ')))
                if Seq.contains "any" allTypes then "any" else String.concat " | " allTypes
            else
                // Check if is array type, which looks like "sequence<DOMString>"
                let unescaped = System.Web.HttpUtility.HtmlDecode(objDomType)
                let genericMatch = Regex.Match(unescaped, @"^(\w+)<(\w+)>$")
                if genericMatch.Success then
                    let tName = DomTypeToTsType (genericMatch.Groups.[1].Value)
                    let paramName = DomTypeToTsType (genericMatch.Groups.[2].Value)
                    match tName with
                    | "Promise" ->
                        "PromiseLike<" + paramName + ">"
                    | _ ->
                        if tName = "Array" then paramName + "[]"
                        else tName + "<" + paramName + ">"
                elif objDomType.EndsWith("[]") then
                    let elementType = objDomType.Replace("[]", "").Trim() |> DomTypeToTsType
                    elementType + "[]"
                else "any"


let makeNullable (originalType: string) =
    match originalType with
    | "any" -> "any"
    | "void" -> "void"
    | t when t.Contains "| null" -> t
    | functionType when functionType.Contains "=>" -> "(" + functionType + ") | null"
    | _ -> originalType + " | null"

let DomTypeToNullableTsType (objDomType: string) (nullable: bool) =
    let resolvedType = DomTypeToTsType objDomType
    if nullable then makeNullable resolvedType else resolvedType

let EmitConstants (i: Browser.Interface) =
    let emitConstantFromJson (c: ItemsType.Root) = Pt.printl "readonly %s: %s;" c.Name.Value c.Type.Value

    let emitConstant (c: Browser.Constant) =
        if Option.isNone (findRemovedItem c.Name ItemKind.Constant i.Name) then
            match findOverriddenItem c.Name ItemKind.Constant i.Name with
            | Some c' -> emitConstantFromJson c'
            | None -> Pt.printl "readonly %s: %s;" c.Name (DomTypeToTsType c.Type)

    // Emit the constants added in the json files

    let addedConstants = getAddedItems ItemKind.Constant Flavor.All
    Array.iter emitConstantFromJson addedConstants

    if i.Constants.IsSome then
        Array.iter emitConstant i.Constants.Value.Constants

let matchSingleParamMethodSignature (m: Browser.Method) expectedMName expectedMType expectedParamType =
    OptionCheckValue expectedMName m.Name &&
    (DomTypeToNullableTsType m.Type m.Nullable.IsSome) = expectedMType &&
    m.Params.Length = 1 &&
    (DomTypeToTsType m.Params.[0].Type) = expectedParamType

/// Emit overloads for the createElement method
let EmitCreateElementOverloads (m: Browser.Method) =
    if matchSingleParamMethodSignature m "createElement" "Element" "string" then
        Pt.printl "createElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];"
        Pt.printl "createElement(tagName: string): HTMLElement;"

/// Emit overloads for the getElementsByTagName method
let EmitGetElementsByTagNameOverloads (m: Browser.Method) =
    if matchSingleParamMethodSignature m "getElementsByTagName" "NodeList" "string" then
        Pt.printl "getElementsByTagName<K extends keyof ElementListTagNameMap>(%s: K): ElementListTagNameMap[K];" m.Params.[0].Name
        Pt.printl "getElementsByTagName(%s: string): NodeListOf<Element>;" m.Params.[0].Name

/// Emit overloads for the querySelector method
let EmitQuerySelectorOverloads (m: Browser.Method) =
    if matchSingleParamMethodSignature m "querySelector" "Element" "string" then
        Pt.printl "querySelector<K extends keyof ElementTagNameMap>(selectors: K): ElementTagNameMap[K] | null;"
        Pt.printl "querySelector(selectors: string): Element | null;"

/// Emit overloads for the querySelectorAll method
let EmitQuerySelectorAllOverloads (m: Browser.Method) =
    if matchSingleParamMethodSignature m "querySelectorAll" "NodeList" "string" then
        Pt.printl "querySelectorAll<K extends keyof ElementListTagNameMap>(selectors: K): ElementListTagNameMap[K];"
        Pt.printl "querySelectorAll(selectors: string): NodeListOf<Element>;"

let EmitHTMLElementTagNameMap () =
    Pt.printl "interface HTMLElementTagNameMap {"
    Pt.increaseIndent()
    for e in tagNameToEleName do
        if iNameToIDependList.ContainsKey e.Value && Seq.contains "HTMLElement" iNameToIDependList.[e.Value] then
            Pt.printl "\"%s\": %s;" (e.Key.ToLower()) e.Value
    Pt.decreaseIndent()
    Pt.printl "}"
    Pt.printl ""

let EmitElementTagNameMap () =
    Pt.printl "interface ElementTagNameMap {"
    Pt.increaseIndent()
    for e in tagNameToEleName do
        Pt.printl "\"%s\": %s;" (e.Key.ToLower()) e.Value
    Pt.decreaseIndent()
    Pt.printl "}"
    Pt.printl ""

let EmitElementListTagNameMap () =
    Pt.printl "interface ElementListTagNameMap {"
    Pt.increaseIndent()
    for e in tagNameToEleName do
        Pt.printl "\"%s\": NodeListOf<%s>;" (e.Key.ToLower()) e.Value
    Pt.decreaseIndent()
    Pt.printl "}"
    Pt.printl ""

/// Emit overloads for the createEvent method
let EmitCreateEventOverloads (m: Browser.Method) =
    if matchSingleParamMethodSignature m "createEvent" "Event" "string" then
        // Emit plurals. For example, "Events", "MutationEvents"
        let hasPlurals = ["Event"; "MutationEvent"; "MouseEvent"; "SVGZoomEvent"; "UIEvent"]
        for x in distinctETypeList do
            Pt.printl "createEvent(eventInterface:\"%s\"): %s;" x x
            if List.contains x hasPlurals then
                Pt.printl "createEvent(eventInterface:\"%ss\"): %s;" x x
        Pt.printl "createEvent(eventInterface: string): Event;"

/// Generate the parameters string for function signatures
let ParamsToString (ps: Param list) =
    let paramToString (p: Param) =
        let isOptional = not p.Variadic && p.Optional
        let pType = if isOptional then DomTypeToTsType p.Type else DomTypeToNullableTsType p.Type p.Nullable
        (if p.Variadic then "..." else "") +
        (AdjustParamName p.Name) +
        (if isOptional then "?: " else ": ") +
        pType +
        (if p.Variadic then "[]" else "")
    String.Join(", ", (List.map paramToString ps))

let EmitMethod flavor prefix (i:Browser.Interface) (m:Browser.Method) =
    // print comment
    if m.Name.IsSome then
        match GetCommentForMethod i.Name m.Name.Value with
        | Some comment -> Pt.printl "%s" comment
        | _ -> ()

    // Find if there are overriding signatures in the external json file
    // - overriddenType: meaning there is a better definition of this type in the json file
    // - removedType: meaning the type is marked as removed in the json file
    // if there is any conflicts between the two, the "removedType" has a higher priority over
    // the "overridenType".
    let removedType = Option.bind (fun name -> JsonItems.findRemovedItem name JsonItems.ItemKind.Method i.Name) m.Name
    let overridenType = Option.bind (fun mName -> JsonItems.findOverriddenItem mName JsonItems.ItemKind.Method i.Name) m.Name

    if removedType.IsNone then
        match overridenType with
        | Some t ->
            match flavor with
            | Flavor.All | Flavor.Web -> t.WebOnlySignatures |> Array.iter (Pt.printl "%s%s;" prefix)
            | _ -> ()
            t.Signatures |> Array.iter (Pt.printl "%s%s;" prefix)
        | None ->
            match i.Name, m.Name with
            | _, Some "createElement" -> EmitCreateElementOverloads m
            | _, Some "createEvent" -> EmitCreateEventOverloads m
            | _, Some "getElementsByTagName" -> EmitGetElementsByTagNameOverloads m
            | _, Some "querySelector" -> EmitQuerySelectorOverloads m
            | _, Some "querySelectorAll" -> EmitQuerySelectorAllOverloads m
            | _ ->
                if m.Name.IsSome then
                    // If there are added overloads from the json files, print them first
                    match findAddedItem m.Name.Value ItemKind.SignatureOverload i.Name with
                    | Some ol -> ol.Signatures |> Array.iter (Pt.printl "%s")
                    | _ -> ()

                let overloads = GetOverloads (Function.Method m) false
                for { ParamCombinations = pCombList; ReturnTypes = rTypes; Nullable = isNullable } in overloads do
                    let paramsString = ParamsToString pCombList
                    let returnString =
                        let returnType = rTypes |> List.map DomTypeToTsType |> String.concat " | "
                        if isNullable then makeNullable returnType else returnType
                    Pt.printl "%s%s(%s): %s;" prefix (if m.Name.IsSome then m.Name.Value else "") paramsString returnString

let EmitCallBackInterface (i:Browser.Interface) =
    Pt.printl "interface %s {" i.Name
    Pt.printWithAddedIndent "(evt: Event): void;"
    Pt.printl "}"
    Pt.printl ""

let EmitCallBackFunctions flavor =
    let emitCallbackFunctionsFromJson (cb: JsonItems.ItemsType.Root) =
        Pt.printl "interface %s {" cb.Name.Value
        cb.Signatures |> Array.iter (Pt.printWithAddedIndent "%s;")
        Pt.printl "}"

    let emitCallBackFunction (cb: Browser.CallbackFunction) =
        if Option.isNone (findRemovedItem cb.Name ItemKind.Callback "")then
            match findOverriddenItem cb.Name ItemKind.Callback "" with
            | Some cb' -> emitCallbackFunctionsFromJson cb'
            | _ ->
                Pt.printl "interface %s {" cb.Name
                let overloads = GetOverloads (CallBackFun cb) false
                for { ParamCombinations = pCombList } in overloads do
                    let paramsString = ParamsToString pCombList
                    Pt.printWithAddedIndent "(%s): %s;" paramsString (DomTypeToTsType cb.Type)
                Pt.printl "}"

    getAddedItems ItemKind.Callback flavor
    |> Array.iter emitCallbackFunctionsFromJson

    GetCallbackFuncsByFlavor flavor |> Array.iter emitCallBackFunction

let EmitEnums () =
    let emitEnum (e: Browser.Enum) = Pt.printl "declare var %s: string;" e.Name
    browser.Enums |> Array.iter emitEnum

let EmitEventHandlerThis flavor (prefix: string) (i: Browser.Interface) =
    if prefix = "" then "this: " + i.Name + ", "
    else match GetGlobalPollutor flavor with
         | Some pollutor -> "this: " + pollutor.Name + ", "
         | _ -> ""
let EmitProperties flavor prefix (emitScope: EmitScope) (i: Browser.Interface)=
    let emitPropertyFromJson (p: ItemsType.Root) =
        let readOnlyModifier =
            match p.Readonly with
            | Some(true) -> "readonly "
            | _ -> ""
        Pt.printl "%s%s%s: %s;" prefix readOnlyModifier p.Name.Value p.Type.Value

    let emitProperty (p: Browser.Property) =
        match GetCommentForProperty i.Name p.Name with
        | Some comment -> Pt.printl "%s" comment
        | _ -> ()

        // Treat window.name specially because of https://github.com/Microsoft/TypeScript/issues/9850
        if p.Name = "name" && i.Name = "Window" && emitScope = EmitScope.All then
            Pt.printl "declare const name: never;"
        elif Option.isNone (findRemovedItem p.Name ItemKind.Property i.Name) then
            match findOverriddenItem p.Name ItemKind.Property i.Name with
            | Some p' -> emitPropertyFromJson p'
            | None ->
                let pType =
                    match p.Type with
                    | "EventHandler" ->
                        // Sometimes event handlers with the same name may actually handle different
                        // events in different interfaces. For example, "onerror" handles "ErrorEvent"
                        // normally, but in "SVGSVGElement" it handles "SVGError" event instead.
                        let eType =
                            if p.EventHandler.IsSome then
                                getEventTypeInInterface p.EventHandler.Value i.Name
                            else
                                "Event"
                        String.Format("({0}ev: {1}) => any", EmitEventHandlerThis flavor prefix i, eType)
                    | _ -> DomTypeToTsType p.Type
                let pTypeAndNull = if p.Nullable.IsSome then makeNullable pType else pType
                let readOnlyModifier = if p.ReadOnly.IsSome && prefix = "" then "readonly " else ""
                Pt.printl "%s%s%s: %s;" prefix readOnlyModifier p.Name pTypeAndNull

    // Note: the schema file shows the property doesn't have "static" attribute,
    // therefore all properties are emited for the instance type.
    if emitScope <> StaticOnly then
        match i.Properties with
        | Some ps ->
            ps.Properties
            |> Array.filter (ShouldKeep flavor)
            |> Array.iter emitProperty
        | None -> ()

        getAddedItems ItemKind.Property flavor
        |> Array.filter (fun addedItem -> (matchInterface i.Name addedItem) && (prefix <> "declare var " || not(OptionCheckValue false addedItem.ExposeGlobally)))
        |> Array.iter emitPropertyFromJson

let EmitMethods flavor prefix (emitScope: EmitScope) (i: Browser.Interface) =
    // Note: two cases:
    // 1. emit the members inside a interface -> no need to add prefix
    // 2. emit the members outside to expose them (for "Window") -> need to add "declare"
    let emitMethodFromJson (m: ItemsType.Root) =
        m.Signatures |> Array.iter (Pt.printl "%s%s;" prefix)

    // If prefix is not empty, then this is the global declare function addEventListener, we want to override this
    // Otherwise, this is EventTarget.addEventListener, we want to keep that.
    let mFilter (m:Browser.Method) =
        matchScope emitScope m &&
        not (prefix <> "" && OptionCheckValue "addEventListener" m.Name)

    if i.Methods.IsSome then
        i.Methods.Value.Methods
        |> Array.filter mFilter
        |> Array.iter (EmitMethod flavor prefix i)

    getAddedItems ItemKind.Method flavor
    |> Array.filter (fun m -> matchInterface i.Name m && matchScope emitScope m)
    |> Array.iter emitMethodFromJson

    // The window interface inherited some methods from "Object",
    // which need to explicitly exposed
    if i.Name = "Window" && prefix = "declare function " then
        Pt.printl "%stoString(): string;" prefix

/// Emit the properties and methods of a given interface
let EmitMembers flavor (prefix: string) (emitScope: EmitScope) (i:Browser.Interface) =
    EmitProperties flavor prefix emitScope i
    let methodPrefix = if prefix.StartsWith("declare var") then "declare function " else ""
    EmitMethods flavor methodPrefix emitScope i

/// Emit all members of every interfaces at the root level.
/// Called only once on the global polluter object
let rec EmitAllMembers flavor (i:Browser.Interface) =
    let prefix = "declare var "
    EmitMembers flavor prefix EmitScope.All i

    for relatedIName in iNameToIDependList.[i.Name] do
        match GetInterfaceByName relatedIName with
        | Some i' -> EmitAllMembers flavor i'
        | _ -> ()

let EmitEventHandlers (flavor: Flavor) (prefix: string) (i:Browser.Interface) =
    let fPrefix =
        if prefix.StartsWith "declare var" then "declare function " else ""

    let emitEventHandler prefix (i:Browser.Interface) =
        Pt.printl
            "%saddEventListener<K extends keyof %sEventMap>(type: K, listener: (this: %s, ev: %sEventMap[K]) => any, useCapture?: boolean): void;"
            prefix i.Name i.Name i.Name

    let shouldEmitStringEventHandler =
        if iNameToEhList.ContainsKey i.Name  && not iNameToEhList.[i.Name].IsEmpty then
            emitEventHandler fPrefix i
            true
        elif iNameToEhParents.ContainsKey i.Name && not iNameToEhParents.[i.Name].IsEmpty then
            iNameToEhParents.[i.Name]
            |> List.sortBy (fun i -> i.Name)
            |> List.iter (emitEventHandler fPrefix)
            true
        else
            false

    if shouldEmitStringEventHandler then
        Pt.printl
            "%saddEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;"
            fPrefix

let EmitConstructorSignature (i:Browser.Interface) =
    let emitConstructorSigFromJson (c: ItemsType.Root) =
        c.Signatures |> Array.iter (Pt.printl "%s;")

    let removedCtor = getRemovedItems ItemKind.Constructor Flavor.All  |> Array.tryFind (matchInterface i.Name)
    if Option.isNone removedCtor then
        let overriddenCtor = getOverriddenItems ItemKind.Constructor Flavor.All  |> Array.tryFind (matchInterface i.Name)
        match overriddenCtor with
        | Some c' -> emitConstructorSigFromJson c'
        | _ ->
            //Emit constructor signature
            match i.Constructor with
            | Some ctor ->
                for { ParamCombinations = pCombList } in GetOverloads (Ctor ctor) false do
                    let paramsString = ParamsToString pCombList
                    Pt.printl "new(%s): %s;" paramsString i.Name
            | _ -> Pt.printl "new(): %s;" i.Name

    getAddedItems ItemKind.Constructor Flavor.All
    |> Array.filter (matchInterface i.Name)
    |> Array.iter emitConstructorSigFromJson

let EmitConstructor flavor (i:Browser.Interface) =
    Pt.printl "declare var %s: {" i.Name
    Pt.increaseIndent()

    Pt.printl "prototype: %s;" i.Name
    EmitConstructorSignature i
    EmitConstants i
    let prefix = ""
    EmitMembers flavor prefix EmitScope.StaticOnly i

    Pt.decreaseIndent()
    Pt.printl "}"
    Pt.printl ""

/// Emit all the named constructors at root level
let EmitNamedConstructors () =
    browser.Interfaces
    |> Array.filter (fun i -> i.NamedConstructor.IsSome)
    |> Array.iter
        (fun i ->
            let nc = i.NamedConstructor.Value
            let ncParams =
                [for p in nc.Params do
                    yield {Type = p.Type; Name = p.Name; Optional = p.Optional.IsSome; Variadic = p.Variadic.IsSome; Nullable = p.Nullable.IsSome}]
            Pt.printl "declare var %s: {new(%s): %s; };" nc.Name (ParamsToString ncParams) i.Name)

let EmitInterfaceDeclaration (i:Browser.Interface) =
    Pt.printl "interface %s" i.Name
    let finalExtends =
        let overridenExtendsFromJson =
            JsonItems.getOverriddenItemsByInterfaceName ItemKind.Extends Flavor.All i.Name
            |> Array.map (fun e -> e.BaseInterface.Value) |> List.ofArray
        if List.isEmpty overridenExtendsFromJson then
            let extendsFromSpec =
                match i.Extends::(List.ofArray i.Implements) with
                | [""] | [] | ["Object"] -> []
                | specExtends -> specExtends
            let extendsFromJson =
                JsonItems.getAddedItemsByInterfaceName ItemKind.Extends Flavor.All i.Name
                |> Array.map (fun e -> e.BaseInterface.Value) |> List.ofArray
            List.concat [extendsFromSpec; extendsFromJson]
        else
            overridenExtendsFromJson
    match finalExtends  with
    | [] -> ()
    | allExtends -> Pt.print " extends %s" (String.Join(", ", allExtends))
    Pt.print " {"

/// To decide if a given method is an indexer and should be emited
let ShouldEmitIndexerSignature (i: Browser.Interface) (m: Browser.Method) =
    if m.Getter.IsSome && m.Params.Length = 1 then
        // TypeScript array indexer can only be number or string
        // for string, it must return a more generic type then all
        // the other properties, following the Dictionary pattern
        match DomTypeToTsType m.Params.[0].Type with
        | "number" -> true
        | "string" ->
            match DomTypeToTsType m.Type with
            | "any" -> true
            | _ ->
                let mTypes =
                    match i.Methods with
                    | Some ms ->
                        ms.Methods |> Array.map (fun m' -> m'.Type) |> Array.filter (fun t -> t <> "void") |> Array.distinct
                    | _ -> [||]
                let amTypes =
                    match i.AnonymousMethods with
                    | Some ms ->
                        ms.Methods |> Array.map (fun m' -> m'.Type) |> Array.filter (fun t -> t <> "void") |> Array.distinct
                    | _ -> [||]
                let pTypes =
                    match i.Properties with
                    | Some ps ->
                        ps.Properties |> Array.map (fun m' -> m'.Type) |> Array.filter (fun t -> t <> "void") |> Array.distinct
                    | _ -> [||]

                match mTypes, amTypes, pTypes with
                | [||], [|y|], [||] -> y = m.Type
                | [|x|], [|y|], [||] -> x = y && y = m.Type
                | [||], [|y|], [|z|] -> y = z && y = m.Type
                | [|x|], [|y|], [|z|] -> x = y && y = z && y = m.Type
                | _ -> false

        | _ -> false
    else
        false

let EmitIndexers emitScope (i: Browser.Interface) =
    let emitIndexerFromJson (id: ItemsType.Root) =
        id.Signatures |> Array.iter (Pt.printl "%s;")

    let removedIndexer = getRemovedItems ItemKind.Indexer Flavor.All |> Array.tryFind (matchInterface i.Name)
    if removedIndexer.IsNone then
        let overriddenIndexer = getOverriddenItems ItemKind.Indexer Flavor.All |> Array.tryFind (matchInterface i.Name)
        match overriddenIndexer with
        | Some id -> emitIndexerFromJson id
        | _ ->
            // The indices could be within either Methods or Anonymous Methods
            let ms = if i.Methods.IsSome then i.Methods.Value.Methods else [||]
            let ams = if i.AnonymousMethods.IsSome then i.AnonymousMethods.Value.Methods else [||]

            Array.concat [|ms; ams|]
            |> Array.filter (fun m -> ShouldEmitIndexerSignature i m && matchScope emitScope m)
            |> Array.iter (fun m ->
                let indexer = m.Params.[0]
                Pt.printl "[%s: %s]: %s;"
                    indexer.Name
                    (DomTypeToTsType indexer.Type)
                    (DomTypeToTsType m.Type))

    getAddedItems ItemKind.Indexer Flavor.All
    |> Array.filter (matchInterface i.Name)
    |> Array.iter emitIndexerFromJson

let EmitInterfaceEventMap flavor (i:Browser.Interface) =
    let EmitInterfaceEventMapEntry (eHandler: EventHandler)  =
        let eventType =
            getEventTypeInInterface eHandler.EventName i.Name
        Pt.printl "\"%s\": %s;" eHandler.EventName eventType

    let ownEventHandles = if iNameToEhList.ContainsKey i.Name && not iNameToEhList.[i.Name].IsEmpty then iNameToEhList.[i.Name] else []
    if ownEventHandles.Length > 0 then
        Pt.printl "interface %sEventMap" i.Name
        if iNameToEhParents.ContainsKey i.Name && not iNameToEhParents.[i.Name].IsEmpty then
            let extends = iNameToEhParents.[i.Name] |> List.map (fun i -> i.Name + "EventMap")
            Pt.print " extends %s" (String.Join(", ", extends))
        Pt.print " {"
        Pt.increaseIndent()
        ownEventHandles |> List.iter EmitInterfaceEventMapEntry
        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl ""
let EmitInterface flavor (i:Browser.Interface) =
    EmitInterfaceEventMap flavor i

    Pt.resetIndent()
    EmitInterfaceDeclaration i
    Pt.increaseIndent()

    let prefix = ""
    EmitMembers flavor prefix EmitScope.InstanceOnly i
    EmitConstants i
    EmitEventHandlers flavor prefix i
    EmitIndexers EmitScope.InstanceOnly i

    Pt.decreaseIndent()
    Pt.printl "}"
    Pt.printl ""

let EmitStaticInterface flavor (i:Browser.Interface) =
    // Some types are static types with non-static members. For example,
    // NodeFilter is a static method itself, however it has an "acceptNode" method
    // that expects the user to implement.
    let hasNonStaticMember =
        let hasNonStaticMethod =
            let hasOwnNonStaticMethod =
                i.Methods.IsSome &&
                i.Methods.Value.Methods
                |> Array.filter (fun m -> m.Name.IsNone || (findRemovedItem m.Name.Value ItemKind.Method i.Name) |> Option.isNone)
                |> Array.exists (fun m -> m.Static.IsNone)
            let hasAddedNonStaticMethod =
                match JsonItems.getAddedItemsByInterfaceName ItemKind.Method flavor i.Name with
                | [||] -> false
                | addedMs -> addedMs |> Array.exists (fun m -> m.Static.IsNone || m.Static.Value = false)
            hasOwnNonStaticMethod || hasAddedNonStaticMethod
        let hasProperty =
            let hasOwnNonStaticProperty =
                i.Properties.IsSome &&
                i.Properties.Value.Properties
                |> Array.filter (fun p -> findRemovedItem p.Name ItemKind.Method i.Name |> Option.isNone)
                |> Array.isEmpty |> not
            let hasAddedNonStaticMethod =
                match JsonItems.getAddedItemsByInterfaceName ItemKind.Property flavor i.Name with
                | [||] -> false
                | addedPs -> addedPs |> Array.exists (fun p -> p.Static.IsNone || p.Static.Value = false)
            hasOwnNonStaticProperty || hasAddedNonStaticMethod
        hasNonStaticMethod || hasProperty

    let emitAddedConstructor () =
        match JsonItems.getAddedItemsByInterfaceName ItemKind.Constructor flavor i.Name with
        | [||] -> ()
        | ctors ->
            Pt.printl "prototype: %s;" i.Name
            ctors |> Array.iter (fun ctor -> ctor.Signatures |> Array.iter (Pt.printl "%s;"))

    // For static types with non-static members, we put the non-static members into an
    // interface, and put the static members into the object literal type of 'declare var'
    // For static types with only static members, we put everything in the interface.
    // Because in the two cases the interface contains different things, it might be easier to
    // read to separate them into two functions.
    let emitStaticInterfaceWithNonStaticMembers () =
        Pt.resetIndent()
        EmitInterfaceDeclaration i
        Pt.increaseIndent()

        let prefix = ""
        EmitMembers flavor prefix EmitScope.InstanceOnly i
        EmitEventHandlers flavor prefix i
        EmitIndexers EmitScope.InstanceOnly i

        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl ""
        Pt.printl "declare var %s: {" i.Name
        Pt.increaseIndent()
        EmitConstants i
        EmitMembers flavor prefix EmitScope.StaticOnly i
        emitAddedConstructor ()
        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl ""

    let emitPureStaticInterface () =
        Pt.resetIndent()
        EmitInterfaceDeclaration i
        Pt.increaseIndent()

        let prefix = ""
        EmitMembers flavor prefix EmitScope.StaticOnly i
        EmitConstants i
        EmitEventHandlers flavor prefix i
        EmitIndexers EmitScope.StaticOnly i
        emitAddedConstructor ()
        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl "declare var %s: %s;" i.Name i.Name
        Pt.printl ""

    if hasNonStaticMember then emitStaticInterfaceWithNonStaticMembers() else emitPureStaticInterface()

let EmitNonCallbackInterfaces flavor =
    for i in GetNonCallbackInterfacesByFlavor flavor do
        // If the static attribute has a value, it means the type doesn't have a constructor
        if i.Static.IsSome then
            EmitStaticInterface flavor i
        elif i.NoInterfaceObject.IsSome then
            EmitInterface flavor i
        else
            EmitInterface flavor i
            EmitConstructor flavor i

let EmitDictionaries flavor =
    let emitDictionary (dict:Browser.Dictionary) =
        match dict.Extends with
        | "Object" -> Pt.printl "interface %s {" dict.Name
        | _ -> Pt.printl "interface %s extends %s {" dict.Name dict.Extends

        let emitJsonProperty (p: ItemsType.Root) =
            Pt.printl "%s: %s;" p.Name.Value p.Type.Value

        let removedPropNames =
            getRemovedItems ItemKind.Property flavor
            |> Array.filter (matchInterface dict.Name)
            |> Array.map (fun rp -> rp.Name.Value)
            |> Set.ofArray
        let addedProps =
            getAddedItems ItemKind.Property flavor
            |> Array.filter (matchInterface dict.Name)

        Pt.increaseIndent()
        Array.iter emitJsonProperty addedProps
        dict.Members
        |> Array.filter (fun m -> not (Set.contains m.Name removedPropNames))
        |> Array.iter (fun m ->
            match (findOverriddenItem m.Name ItemKind.Property dict.Name) with
            | Some om -> emitJsonProperty om
            | None -> Pt.printl "%s?: %s;" m.Name (DomTypeToTsType m.Type))
        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl ""

    browser.Dictionaries
    |> Array.filter (fun dict -> flavor <> Worker || knownWorkerInterfaces.Contains dict.Name)
    |> Array.iter emitDictionary

let EmitAddedInterface (ai: JsonItems.ItemsType.Root) =
    match ai.Extends with
    | Some e -> Pt.printl "interface %s extends %s {" ai.Name.Value ai.Extends.Value
    | None -> Pt.printl "interface %s {" ai.Name.Value

    for p in ai.Properties do
        let readOnlyModifier =
            match p.Readonly with
            | Some(true) -> "readonly "
            | _ -> ""
        Pt.printWithAddedIndent "%s%s: %s;" readOnlyModifier p.Name p.Type

    ai.Methods |> Array.collect (fun m -> m.Signatures) |> Array.iter (Pt.printWithAddedIndent "%s;")
    ai.Indexer |> Array.collect (fun i -> i.Signatures) |> Array.iter (Pt.printWithAddedIndent "%s;")
    Pt.printl "}"
    Pt.printl ""

    if ai.ConstructorSignatures.Length > 0 then
        Pt.printl "declare var %s: {" ai.Name.Value
        Pt.printWithAddedIndent "prototype: %s;" ai.Name.Value
        ai.ConstructorSignatures |> Array.iter (Pt.printWithAddedIndent "%s;")
        Pt.printl "}"
        Pt.printl ""

let EmitTypeDefs flavor =
    let EmitTypeDef (typeDef: Browser.Typedef) =
        Pt.printl "type %s = %s;" typeDef.NewType (DomTypeToTsType typeDef.Type)
    let EmitTypeDefFromJson (typeDef: ItemsType.Root) =
        Pt.printl "type %s = %s;" typeDef.Name.Value typeDef.Type.Value

    match flavor with
    | Flavor.Worker ->
        browser.Typedefs |> Array.filter (fun typedef -> knownWorkerInterfaces.Contains typedef.NewType) |> Array.iter EmitTypeDef
    | _ ->
        browser.Typedefs |> Array.iter EmitTypeDef

    JsonItems.getAddedItems ItemKind.TypeDef flavor
    |> Array.iter EmitTypeDefFromJson

let EmitTheWholeThing flavor (target:TextWriter) =
    Pt.reset()
    Pt.printl "/////////////////////////////"
    match flavor with
    | Worker -> Pt.printl "/// IE Worker APIs"
    | _ -> Pt.printl "/// IE DOM APIs"
    Pt.printl "/////////////////////////////"
    Pt.printl ""

    EmitDictionaries flavor
    EmitCallBackInterface browser.CallbackInterfaces.Interface
    EmitNonCallbackInterfaces flavor

    // Add missed interface definition from the spec
    JsonItems.getAddedItems JsonItems.Interface flavor |> Array.iter EmitAddedInterface

    Pt.printl "declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;"
    Pt.printl ""

    EmitCallBackFunctions flavor

    if flavor <> Worker then
        EmitHTMLElementTagNameMap()
        EmitElementTagNameMap()
        EmitElementListTagNameMap()
        EmitNamedConstructors()

    match GetGlobalPollutor flavor with
    | Some gp ->
        EmitAllMembers flavor gp
        EmitEventHandlers flavor "declare var " gp
    | _ -> ()

    EmitTypeDefs flavor

    fprintf target "%s" (Pt.getResult())
    target.Flush()
    target.Close()

let EmitDomWeb () =
    EmitTheWholeThing Flavor.All GlobalVars.tsWebOutput

let EmitDomWorker () =
    ignoreDOMTypes <- true
    EmitTheWholeThing Flavor.Worker GlobalVars.tsWorkerOutput
