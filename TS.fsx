#r "packages/FSharp.Data/lib/net40/FSharp.Data.dll"
#r "System.Xml.Linq.dll"

open System
open System.Collections.Generic
open System.IO
open System.Text
open System.Text.RegularExpressions
open System.Web
open Microsoft.FSharp.Reflection
open FSharp.Data

module GlobalVars =
    let inputFolder = Path.Combine(__SOURCE_DIRECTORY__, "inputfiles")
    let outputFolder = Path.Combine(__SOURCE_DIRECTORY__, "generated")

    // Create output folder
    if not (Directory.Exists(outputFolder)) then
        Directory.CreateDirectory(outputFolder) |> ignore

    let makeTextWriter fileName = File.CreateText(Path.Combine(outputFolder, fileName)) :> TextWriter
    let tsWebOutput = makeTextWriter "dom.generated.d.ts"
    let tsWorkerOutput = makeTextWriter "webworker.generated.d.ts"
    let defaultEventType = "Event"

module Helpers =
    /// Quick checker for option type values
    let OptionCheckValue value = function
        | Some v when v = value -> true
        | _ -> false

    let unionToString (x: 'a) =
        match FSharpValue.GetUnionFields(x, typeof<'a>) with
        | case, _ -> case.Name

    module Option =
        let runIfSome f x =
            match x with
            | Some x' -> f x'
            | _ -> ()

        let toBool f x =
            match x with
            | Some x' -> f x'
            | _ -> false

    type String with
        member this.TrimStartString str =
            if this.StartsWith(str) then this.Substring(str.Length)
            else this

module Types =
    open Helpers

    type Flavor = Worker | Web | All with
        override x.ToString() = unionToString x

    type Browser = XmlProvider<"sample.xml", Global=true>

    // Printer for print to string
    type StringPrinter() =
        let output = StringBuilder()
        let stack = StringBuilder()
        let mutable curTabCount = 0
        member this.GetCurIndent() = String.replicate curTabCount "    "

        member this.Print content = Printf.kprintf (output.Append >> ignore) content

        member this.PrintToStack content = Printf.kprintf (stack.Append >> ignore) content

        member this.ClearStack () = stack.Clear() |> ignore

        member this.PrintStackContent () = this.Print "%s" (stack.ToString())

        member this.Printl content =
            Printf.kprintf (fun s -> output.Append("\r\n" + this.GetCurIndent() + s) |> ignore) content
        
        member this.PrintlToStack content =
            Printf.kprintf (fun s -> stack.Append("\r\n" + this.GetCurIndent() + s) |> ignore) content
        
        member this.StackIsEmpty () = stack.Length = 0

        member this.IncreaseIndent() = curTabCount <- curTabCount + 1

        member this.SetIndent indentNum = curTabCount <- indentNum

        member this.DecreaseIndent() = curTabCount <- Math.Max(curTabCount - 1, 0)

        member this.ResetIndent() = curTabCount <- 0

        member this.PrintWithAddedIndent content =
            Printf.kprintf (fun s -> output.Append("\r\n" + this.GetCurIndent() + "    " + s) |> ignore) content

        member this.GetResult() = output.ToString()

        member this.Clear() = output.Clear() |> ignore

        member this.Reset() =
            this.Clear()
            this.ResetIndent()

    type Event = { Name : string; Type : string }

    /// Method parameter
    type Param = {
        Type : string
        Name : string
        Optional : bool
        Variadic : bool
        Nullable : bool }

    /// Function overload
    type Overload = { ParamCombinations : Param list; ReturnTypes : string list; Nullable : Boolean } with
        member this.IsEmpty = this.ParamCombinations.IsEmpty && (this.ReturnTypes = [ "void" ] || this.ReturnTypes = [ "" ])

    type Function =
        | Method of Browser.Method
        | Ctor of Browser.Constructor
        | CallBackFun of Browser.CallbackFunction

    // Note:
    // Eventhandler's name and the eventName are not just off by "on".
    // For example, handlers named "onabort" may handle "SVGAbort" event in the XML file
    type EventHandler = { Name : string; EventName : string; EventType : string }

    /// Decide which members of a function to emit
    type EmitScope =
        | StaticOnly
        | InstanceOnly
        | All

    type ExtendConflict = { BaseType: string; ExtendType: string list; MemberNames: string list }

module InputJson =
    open Helpers
    open Types

    type InputJsonType = JsonProvider<"inputfiles/sample.json">

    let overriddenItems =
        File.ReadAllText(GlobalVars.inputFolder + @"/overridingTypes.json") |> InputJsonType.Parse

    let removedItems =
        File.ReadAllText(GlobalVars.inputFolder + @"/removedTypes.json") |> InputJsonType.Parse

    let addedItems =
        File.ReadAllText(GlobalVars.inputFolder + @"/addedTypes.json") |> InputJsonType.Parse

    // This is the kind of items in the external json files that are used as a
    // correction for the spec.
    type ItemKind =
        | Property
        | Method
        | Constant
        | Constructor
        | Interface
        | Callback
        | Indexer
        | SignatureOverload
        | TypeDef
        | Extends
        override x.ToString() =
            match x with
            | Property _ -> "property"
            | Method _ -> "method"
            | Constant _ -> "constant"
            | Constructor _ -> "constructor"
            | Interface _ -> "interface"
            | Callback _ -> "callback"
            | Indexer _ -> "indexer"
            | SignatureOverload _ -> "signatureoverload"
            | TypeDef _ -> "typedef"
            | Extends _ -> "extends"

    let getItemByName (allItems: InputJsonType.Root []) (itemName: string) (kind: ItemKind) otherFilter =
        let filter (item: InputJsonType.Root) =
            OptionCheckValue itemName item.Name &&
            item.Kind.ToLower() = kind.ToString() &&
            otherFilter item
        allItems |> Array.tryFind filter

    let matchInterface iName (item: InputJsonType.Root) =
        item.Interface.IsNone || item.Interface.Value = iName

    let getOverriddenItemByName itemName (kind: ItemKind) iName =
        getItemByName overriddenItems itemName kind (matchInterface iName)

    let getRemovedItemByName itemName (kind: ItemKind) iName =
        getItemByName removedItems itemName kind (matchInterface iName)

    let getAddedItemByName itemName (kind: ItemKind) iName =
        getItemByName addedItems itemName kind (matchInterface iName)

    let getItems (allItems: InputJsonType.Root []) (kind: ItemKind) (flavor: Flavor) =
        allItems
        |> Array.filter (fun t ->
            t.Kind.ToLower() = kind.ToString() &&
            (t.Flavor.IsNone || t.Flavor.Value = flavor.ToString() || flavor = Flavor.All))

    let getOverriddenItems = getItems overriddenItems

    let getAddedItems = getItems addedItems

    let getRemovedItems = getItems removedItems

    let getAddedItemsByInterfaceName kind flavor iName =
        getAddedItems kind flavor |> Array.filter (matchInterface iName)

    let getOverriddenItemsByInterfaceName kind flavor iName =
        getOverriddenItems kind flavor |> Array.filter (matchInterface iName)

    let getRemovedItemsByInterfaceName kind flavor iName =
        getRemovedItems kind flavor |> Array.filter (matchInterface iName)

module CommentJson =
    type CommentJsonType = JsonProvider<"inputfiles/comments.json", InferTypesFromValues=false>

    let comments = File.ReadAllText(Path.Combine(GlobalVars.inputFolder, "comments.json")) |> CommentJsonType.Parse

    type InterfaceCommentItem = { Property: Map<string, string>; Method: Map<string, string>; Constructor: string option }

    let commentMap =
        comments.Interfaces
        |> Array.map (fun i ->
            let propertyMap = i.Members.Property |> Array.map (fun p -> (p.Name, p.Comment)) |> Map.ofArray
            let methodMap = i.Members.Method |> Array.map (fun m -> (m.Name, m.Comment)) |> Map.ofArray
            (i.Name, { Property = propertyMap; Method = methodMap; Constructor = i.Members.Constructor }))
        |> Map.ofArray

    let GetCommentForProperty iName pName =
        match commentMap.TryFind iName with
        | Some i -> i.Property.TryFind pName
        | _ -> None

    let GetCommentForMethod iName mName =
        match commentMap.TryFind iName with
        | Some i -> i.Method.TryFind mName
        | _ -> None

    let GetCommentForConstructor iName =
        match commentMap.TryFind iName with
        | Some i -> i.Constructor
        | _ -> None

module Data =
    open Helpers
    open Types

    // Used to decide if a member should be emitted given its static property and
    // the intended scope level.
    let inline matchScope scope (x: ^a when ^a: (member Static: Option<'b>)) =
        if scope = EmitScope.All then true
        else
            let isStatic = (^a: (member Static: Option<'b>)x)
            if isStatic.IsSome then scope = EmitScope.StaticOnly
            else scope = EmitScope.InstanceOnly

    let matchInterface iName (x: InputJson.InputJsonType.Root) =
        x.Interface.IsNone || x.Interface.Value = iName

    /// Parameter cannot be named "default" in JavaScript/Typescript so we need to rename it.
    let AdjustParamName name =
        match name with
        | "default" -> "_default"
        | "delete" -> "_delete"
        | "continue" -> "_continue"
        | _ -> name

    /// Parse the xml input file
    let browser =
        (new StreamReader(Path.Combine(GlobalVars.inputFolder, "browser.webidl.xml"))).ReadToEnd() |> Browser.Parse

    let worker =
        (new StreamReader(Path.Combine(GlobalVars.inputFolder, "webworkers.specidl.xml"))).ReadToEnd() |> Browser.Parse

    /// Check if the given element should be disabled or not
    /// reason is that ^a can be an interface, property or method, but they
    /// all share a 'tag' property
    let inline ShouldKeep flavor (i: ^a when ^a: (member Tags: string option)) =
        let filterByTag =
            match (^a: (member Tags: string option) i) with
            | Some tags ->
                match flavor with
                | Flavor.All -> true
                | Flavor.Web -> tags <> "MSAppOnly" && tags <> "WinPhoneOnly"
                | Flavor.Worker -> tags <> "IEOnly"
            | _ -> true
        filterByTag

    // Global interfacename to interface object map
    let allWebNonCallbackInterfaces =
        Array.concat [| browser.Interfaces; browser.MixinInterfaces.Interfaces |]

    let allWebInterfaces =
        Array.concat [| browser.Interfaces; browser.CallbackInterfaces.Interfaces; browser.MixinInterfaces.Interfaces |]

    let allWorkerAdditionalInterfaces =
        Array.concat [| worker.Interfaces; worker.MixinInterfaces.Interfaces |]

    let allInterfaces =
        Array.concat [| allWebInterfaces; allWorkerAdditionalInterfaces |]

    let inline toNameMap< ^a when ^a: (member Name: string) > (data: array< ^a > ) =
        data
        |> Array.map (fun x -> ((^a: (member Name: string) x), x))
        |> Map.ofArray

    let allInterfacesMap =
        allInterfaces |> toNameMap

    let allDictionariesMap =
        Array.concat [| browser.Dictionaries; worker.Dictionaries |]
        |> toNameMap

    let allEnumsMap =
        Array.concat [| browser.Enums; worker.Enums |]
        |> toNameMap

    let allCallbackFuncs =
        Array.concat [| browser.CallbackFunctions; worker.CallbackFunctions |]
        |> toNameMap

    let GetInterfaceByName = allInterfacesMap.TryFind

    type KnownWorkerInterfaceType = JsonProvider<"inputfiles/knownWorkerInterfaces.json", InferTypesFromValues=false>
    let knownWorkerInterfaces =
        File.ReadAllText(Path.Combine(GlobalVars.inputFolder, "knownWorkerInterfaces.json")) 
        |> KnownWorkerInterfaceType.Parse 
        |> set

    let GetAllInterfacesByFlavor flavor =
        match flavor with
        | Flavor.Web -> allWebInterfaces |> Array.filter (ShouldKeep Web)
        | Flavor.All -> allWebInterfaces |> Array.filter (ShouldKeep Flavor.All)
        | Flavor.Worker ->
            let isFromBrowserXml = allWebInterfaces |> Array.filter (fun i -> knownWorkerInterfaces.Contains i.Name)
            Array.append isFromBrowserXml allWorkerAdditionalInterfaces

    let GetNonCallbackInterfacesByFlavor flavor =
        match flavor with
        | Flavor.Web -> allWebNonCallbackInterfaces |> Array.filter (ShouldKeep Flavor.Web)
        | Flavor.All -> allWebNonCallbackInterfaces |> Array.filter (ShouldKeep Flavor.All)
        | Flavor.Worker ->
            let isFromBrowserXml = allWebNonCallbackInterfaces |> Array.filter (fun i -> knownWorkerInterfaces.Contains i.Name)
            Array.append isFromBrowserXml allWorkerAdditionalInterfaces

    let GetPublicInterfacesByFlavor flavor =
        match flavor with
        | Flavor.Web | Flavor.All -> browser.Interfaces |> Array.filter (ShouldKeep flavor)
        | Flavor.Worker ->
            let isFromBrowserXml = browser.Interfaces |> Array.filter (fun i -> knownWorkerInterfaces.Contains i.Name)
            Array.append isFromBrowserXml worker.Interfaces

    let GetCallbackFuncsByFlavor flavor =
        browser.CallbackFunctions
        |> Array.filter (fun cb -> (flavor <> Flavor.Worker || knownWorkerInterfaces.Contains cb.Name) && ShouldKeep flavor cb)

    /// Event name to event type map
    let eNameToEType =
        [ for i in allWebNonCallbackInterfaces do
            if i.Events.IsSome then yield! i.Events.Value.Events ]
        |> List.map (fun (e : Browser.Event) ->
            let eType =
                match e.Name with
                | "abort" -> "UIEvent"
                | "complete" -> "Event"
                | "click" -> "MouseEvent"
                | "error" -> "ErrorEvent"
                | "load" -> "Event"
                | "loadstart" -> "Event"
                | "progress" -> "ProgressEvent"
                | "readystatechange" -> "ProgressEvent"
                | "resize" -> "UIEvent"
                | "timeout" -> "ProgressEvent"
                | _ -> e.Type
            (e.Name, eType))
        |> Map.ofList

    let eNameToETypeWithoutCase =
        eNameToEType
        |> Map.toList
        |> List.map (fun (k, v) -> (k.ToLower(), v))
        |> Map.ofList

    let getEventTypeInInterface eName (i: Browser.Interface) =
        match i.Name, eName with
        | "IDBDatabase", "abort"
        | "IDBTransaction", "abort"
        | "MSBaseReader", "abort"
        | "XMLHttpRequestEventTarget", "abort"
            -> "Event"
        | "XMLHttpRequest", "readystatechange"
            -> "Event"
        | "XMLHttpRequest", _
            -> "ProgressEvent"
        | _ ->
            let ownEventType =
                if i.Events.IsSome then
                    match i.Events.Value.Events |> Array.tryFind (fun e -> e.Name = eName) with
                    | Some e -> e.Type
                    | _ -> ""
                else
                    ""
            if ownEventType = "" then
                match eNameToEType.TryFind eName with
                | Some eType' -> eType'
                | _ -> "Event"
            else
                ownEventType

    /// Tag name to element name map
    let tagNameToEleName =
        let preferedElementMap =
            function
            | "script" -> "HTMLScriptElement"
            | "a" -> "HTMLAnchorElement"
            | "title" -> "HTMLTitleElement"
            | "style" -> "HTMLStyleElement"
            | _ -> ""

        let resolveElementConflict tagName (iNames : seq<string>) =
            match preferedElementMap tagName with
            | name when Seq.contains name iNames -> name
            | _ -> raise (Exception("Element conflict occured! Typename: " + tagName))

        [ for i in GetNonCallbackInterfacesByFlavor Flavor.All do
            yield! [ for e in i.Elements do
                        yield (e.Name, i.Name) ] ]
        |> Seq.groupBy fst
        |> Seq.map (fun (key, group) -> (key, Seq.map snd group))
        |> Seq.map (fun (key, group) ->
            key,
            match Seq.length group with
            | 1 -> Seq.head group
            | _ -> resolveElementConflict key group)
        |> Map.ofSeq

    /// Interface name to all its implemented / inherited interfaces name list map
    /// e.g. If i1 depends on i2, i2 should be in dependencyMap.[i1.Name]
    let iNameToIDependList =
        let rec getExtendList(iName : string) =
            match GetInterfaceByName iName with
            | Some i ->
                match i.Extends with
                | "Object" -> []
                | super -> super :: (getExtendList super)
            | _ -> []

        let getImplementList(iName : string) =
            match GetInterfaceByName iName with
            | Some i -> List.ofArray i.Implements
            | _ -> []

        Array.concat [| allWebNonCallbackInterfaces; worker.Interfaces; worker.MixinInterfaces.Interfaces |]
        |> Array.map (fun i -> (i.Name, List.concat [ (getExtendList i.Name); (getImplementList i.Name) ]))
        |> Map.ofArray

    /// Distinct event type list, used in the "createEvent" function
    let distinctETypeList =
        let usedEvents =
            [ for i in GetNonCallbackInterfacesByFlavor Flavor.All do
                match i.Events with
                | Some es -> yield! es.Events
                | _ -> () ]
            |> List.map (fun e -> e.Type)
            |> List.distinct

        let unUsedEvents =
            GetNonCallbackInterfacesByFlavor Flavor.All
            |> Array.choose (fun i ->
                if i.Extends = "Event" && i.Name.EndsWith("Event") && not (List.contains i.Name usedEvents) then Some(i.Name) else None)
            |> Array.distinct
            |> List.ofArray

        List.concat [ usedEvents; unUsedEvents ] |> List.sort

    /// Determine if interface1 depends on interface2
    let IsDependsOn i1Name i2Name =
        match (iNameToIDependList.ContainsKey i2Name) && (iNameToIDependList.ContainsKey i1Name) with
        | true -> Seq.contains i2Name iNameToIDependList.[i1Name]
        | false -> i2Name = "Object"

    /// Interface name to its related eventhandler name list map
    /// Note:
    /// In the xml file, each event handler has
    /// 1. eventhanlder name: "onready", "onabort" etc.
    /// 2. the event name that it handles: "ready", "SVGAbort" etc.
    /// And they don't NOT just differ by an "on" prefix!
    let iNameToEhList =
        let getEventTypeFromHandler (p : Browser.Property) (i : Browser.Interface) =
            let eType =
                // Check the "event-handler" attribute of the event handler property,
                // which is the corresponding event name
                match p.EventHandler with
                | Some eName ->
                    // The list is partly obtained from the table at
                    // http://www.w3.org/TR/DOM-Level-3-Events/#dom-events-conformance   #4.1
                    match eNameToEType.TryFind eName with
                    | Some v -> v
                    | _ -> GlobalVars.defaultEventType
                | _ -> GlobalVars.defaultEventType
            match eType with
            | "Event" -> "Event"
            | name when (IsDependsOn name "Event") -> eType
            | _ -> GlobalVars.defaultEventType

        // Get all the event handlers from an interface and also from its inherited / implemented interfaces
        let rec getEventHandler(i : Browser.Interface) =
            let ownEventHandler =
                match i.Properties with
                | Some ps ->
                    ps.Properties
                    |> Array.choose (fun p' ->
                        if p'.Type = "EventHandler" && p'.EventHandler.IsSome then
                            Some({ Name = p'.Name; EventName = p'.EventHandler.Value; EventType = getEventTypeFromHandler p' i })
                        else None)
                    |> List.ofArray
                | None -> []
            if ownEventHandler.Length > 0 then ownEventHandler else []

        allInterfaces
        |> Array.map (fun i -> (i.Name, getEventHandler i))
        |> Map.ofArray

    let iNameToEhParents =
        let hasHandler (i : Browser.Interface) =
            iNameToEhList.ContainsKey i.Name && not iNameToEhList.[i.Name].IsEmpty

        // Get all the event handlers from an interface and also from its inherited / implemented interfaces
        let rec getParentsWithEventHandler (i : Browser.Interface) =
            let getParentEventHandler (i: Browser.Interface) =
                if hasHandler i then [i] else getParentsWithEventHandler i

            let extendedParentWithEventHandler =
                match GetInterfaceByName i.Extends with
                | Some extended -> getParentEventHandler extended
                | None -> []

            let implementedParentsWithEventHandler =
                i.Implements
                |> Array.choose GetInterfaceByName
                |> List.ofArray
                |> List.collect getParentEventHandler

            List.concat [ extendedParentWithEventHandler; implementedParentsWithEventHandler ]

        allInterfaces
        |> Array.map (fun i -> (i.Name, getParentsWithEventHandler i))
        |> Map.ofArray

    /// Event handler name to event type map
    let ehNameToEType =
        let t =
            [ for KeyValue(_, ehList) in iNameToEhList do
                yield! (List.map (fun eh -> (eh.Name, eh.EventType)) ehList) ]
            |> List.distinct
        t |> Map.ofList

    let GetGlobalPollutor flavor =
        match flavor with
        | Flavor.Web | Flavor.All -> browser.Interfaces |> Array.tryFind (fun i -> i.PrimaryGlobal.IsSome)
        | Flavor.Worker -> worker.Interfaces |> Array.tryFind (fun i -> i.Global.IsSome)

    let GetGlobalPollutorName flavor =
        match GetGlobalPollutor flavor with
        | Some gp -> gp.Name
        | _ -> "Window"

    /// Return a sequence of returntype * HashSet<paramCombination> tuple
    let GetOverloads (f : Function) (decomposeMultipleTypes : bool) =
        let getParams (f : Function) =
            match f with
            | Method m ->
                [ for p in m.Params do
                    yield { Type = p.Type
                            Name = p.Name
                            Optional = p.Optional.IsSome
                            Variadic = p.Variadic.IsSome
                            Nullable = p.Nullable.IsSome } ]
            | Ctor c ->
                [ for p in c.Params do
                    yield { Type = p.Type
                            Name = p.Name
                            Optional = p.Optional.IsSome
                            Variadic = p.Variadic.IsSome
                            Nullable = p.Nullable.IsSome } ]
            | CallBackFun cb ->
                [ for p in cb.Params do
                    yield { Type = p.Type
                            Name = p.Name
                            Optional = p.Optional.IsSome
                            Variadic = p.Variadic.IsSome
                            Nullable = p.Nullable.IsSome } ]

        let getReturnType (f : Function) =
            match f with
            | Method m -> m.Type
            | Ctor _ -> ""
            | CallBackFun cb -> cb.Type

        let isNullable =
            match f with
            | Method m -> m.Nullable.IsSome
            | Ctor _ -> false
            | CallBackFun cb -> true

        // Some params have the type of "(DOMString or DOMString [] or Number)"
        // we need to transform it into [“DOMString", "DOMString []", "Number"]
        let decomposeTypes (t : string) = t.Trim([| '('; ')' |]).Split([| " or " |], StringSplitOptions.None)

        let decomposeParam (p : Param) =
            [ for t in (decomposeTypes p.Type) do
                yield { Type = t
                        Name = p.Name
                        Optional = p.Optional
                        Variadic = p.Variadic
                        Nullable = p.Nullable } ]

        let pCombList =
            let pCombs = List<_>()

            let rec enumParams (acc : Param list) (rest : Param list) =
                match rest with
                | p :: ps when p.Type.Contains("or") ->
                    let pOptions = decomposeParam p
                    for pOption in pOptions do
                        enumParams (pOption :: acc) ps
                | p :: ps -> enumParams (p :: acc) ps
                | [] ->
                    // Iteration is completed and time to print every param now
                    pCombs.Add(List.rev acc) |> ignore
            enumParams [] (getParams f)
            List.ofSeq pCombs

        let rTypes =
            getReturnType f
            |> decomposeTypes
            |> List.ofArray

        if decomposeMultipleTypes then
            [ for pComb in pCombList do
                yield { ParamCombinations = pComb
                        ReturnTypes = rTypes
                        Nullable = isNullable } ]
        else
            [ { ParamCombinations = getParams f
                ReturnTypes = rTypes
                Nullable = isNullable } ]

    /// Define the subset of events that dedicated workers will use
    let workerEventsMap =
        [
            ("close", "CloseEvent");
            ("error", "ErrorEvent");
            ("upgradeneeded", "IDBVersionChangeEvent");
            ("message", "MessageEvent");
            ("loadend", "ProgressEvent");
            ("progress", "ProgressEvent");
        ]
        |> Map.ofList

    let typeDefSet =
        browser.Typedefs |> Array.map (fun td -> td.NewType) |> Set.ofArray

    let extendConflicts = [
        { BaseType = "AudioContext"; ExtendType = ["OfflineContext"]; MemberNames = ["suspend"] };
        { BaseType = "HTMLCollection"; ExtendType = ["HTMLFormControlsCollection"]; MemberNames = ["namedItem"] };
        ]

    let extendConflictsBaseTypes =
        extendConflicts |> List.map (fun ec -> (ec.BaseType, ec)) |> Map.ofList

module Emit =
    open Data
    open Types
    open Helpers
    open InputJson

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
        let emitConstantFromJson (c: InputJsonType.Root) = Pt.Printl "readonly %s: %s;" c.Name.Value c.Type.Value

        let emitConstant (c: Browser.Constant) =
            if Option.isNone (getRemovedItemByName c.Name ItemKind.Constant i.Name) then
                match getOverriddenItemByName c.Name ItemKind.Constant i.Name with
                | Some c' -> emitConstantFromJson c'
                | None -> Pt.Printl "readonly %s: %s;" c.Name (DomTypeToTsType c.Type)

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
            Pt.Printl "createElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];"
            Pt.Printl "createElement(tagName: string): HTMLElement;"

    /// Emit overloads for the getElementsByTagName method
    let EmitGetElementsByTagNameOverloads (m: Browser.Method) =
        if matchSingleParamMethodSignature m "getElementsByTagName" "NodeList" "string" then
            Pt.Printl "getElementsByTagName<K extends keyof ElementListTagNameMap>(%s: K): ElementListTagNameMap[K];" m.Params.[0].Name
            Pt.Printl "getElementsByTagName(%s: string): NodeListOf<Element>;" m.Params.[0].Name

    /// Emit overloads for the querySelector method
    let EmitQuerySelectorOverloads (m: Browser.Method) =
        if matchSingleParamMethodSignature m "querySelector" "Element" "string" then
            Pt.Printl "querySelector<K extends keyof ElementTagNameMap>(selectors: K): ElementTagNameMap[K] | null;"
            Pt.Printl "querySelector(selectors: string): Element | null;"

    /// Emit overloads for the querySelectorAll method
    let EmitQuerySelectorAllOverloads (m: Browser.Method) =
        if matchSingleParamMethodSignature m "querySelectorAll" "NodeList" "string" then
            Pt.Printl "querySelectorAll<K extends keyof ElementListTagNameMap>(selectors: K): ElementListTagNameMap[K];"
            Pt.Printl "querySelectorAll(selectors: string): NodeListOf<Element>;"

    let EmitHTMLElementTagNameMap () =
        Pt.Printl "interface HTMLElementTagNameMap {"
        Pt.IncreaseIndent()
        for e in tagNameToEleName do
            if iNameToIDependList.ContainsKey e.Value && Seq.contains "HTMLElement" iNameToIDependList.[e.Value] then
                Pt.Printl "\"%s\": %s;" (e.Key.ToLower()) e.Value
        Pt.DecreaseIndent()
        Pt.Printl "}"
        Pt.Printl ""

    let EmitElementTagNameMap () =
        Pt.Printl "interface ElementTagNameMap {"
        Pt.IncreaseIndent()
        for e in tagNameToEleName do
            Pt.Printl "\"%s\": %s;" (e.Key.ToLower()) e.Value
        Pt.DecreaseIndent()
        Pt.Printl "}"
        Pt.Printl ""

    let EmitElementListTagNameMap () =
        Pt.Printl "interface ElementListTagNameMap {"
        Pt.IncreaseIndent()
        for e in tagNameToEleName do
            Pt.Printl "\"%s\": NodeListOf<%s>;" (e.Key.ToLower()) e.Value
        Pt.DecreaseIndent()
        Pt.Printl "}"
        Pt.Printl ""

    /// Emit overloads for the createEvent method
    let EmitCreateEventOverloads (m: Browser.Method) =
        if matchSingleParamMethodSignature m "createEvent" "Event" "string" then
            // Emit plurals. For example, "Events", "MutationEvents"
            let hasPlurals = ["Event"; "MutationEvent"; "MouseEvent"; "SVGZoomEvent"; "UIEvent"]
            for x in distinctETypeList do
                Pt.Printl "createEvent(eventInterface:\"%s\"): %s;" x x
                if List.contains x hasPlurals then
                    Pt.Printl "createEvent(eventInterface:\"%ss\"): %s;" x x
            Pt.Printl "createEvent(eventInterface: string): Event;"

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

    let EmitCallBackInterface (i:Browser.Interface) =
        Pt.Printl "interface %s {" i.Name
        Pt.PrintWithAddedIndent "(evt: Event): void;"
        Pt.Printl "}"
        Pt.Printl ""

    let EmitCallBackFunctions flavor =
        let emitCallbackFunctionsFromJson (cb: InputJson.InputJsonType.Root) =
            Pt.Printl "interface %s {" cb.Name.Value
            cb.Signatures |> Array.iter (Pt.PrintWithAddedIndent "%s;")
            Pt.Printl "}"

        let emitCallBackFunction (cb: Browser.CallbackFunction) =
            if Option.isNone (getRemovedItemByName cb.Name ItemKind.Callback "")then
                match getOverriddenItemByName cb.Name ItemKind.Callback "" with
                | Some cb' -> emitCallbackFunctionsFromJson cb'
                | _ ->
                    Pt.Printl "interface %s {" cb.Name
                    let overloads = GetOverloads (CallBackFun cb) false
                    for { ParamCombinations = pCombList } in overloads do
                        let paramsString = ParamsToString pCombList
                        Pt.PrintWithAddedIndent "(%s): %s;" paramsString (DomTypeToTsType cb.Type)
                    Pt.Printl "}"

        getAddedItems ItemKind.Callback flavor
        |> Array.iter emitCallbackFunctionsFromJson

        GetCallbackFuncsByFlavor flavor |> Array.iter emitCallBackFunction

    let EmitEnums () =
        let emitEnum (e: Browser.Enum) = Pt.Printl "declare var %s: string;" e.Name
        browser.Enums |> Array.iter emitEnum

    let EmitEventHandlerThis flavor (prefix: string) (i: Browser.Interface) =
        if prefix = "" then "this: " + i.Name + ", "
        else match GetGlobalPollutor flavor with
             | Some pollutor -> "this: " + pollutor.Name + ", "
             | _ -> ""

    let EmitProperties flavor prefix (emitScope: EmitScope) (i: Browser.Interface) (conflictedMembers: Set<string>) = 
        let emitPropertyFromJson (p: InputJsonType.Root) =
            let readOnlyModifier =
                match p.Readonly with
                | Some(true) -> "readonly "
                | _ -> ""
            Pt.Printl "%s%s%s: %s;" prefix readOnlyModifier p.Name.Value p.Type.Value

        let emitCommentForProperty (printLine: Printf.StringFormat<_, unit> -> _) pName =
            match CommentJson.GetCommentForProperty i.Name pName with
            | Some comment -> printLine "%s" comment
            | _ -> ()

        let emitProperty (p: Browser.Property) =
            let printLine content =
                if conflictedMembers.Contains p.Name then Pt.PrintlToStack content else Pt.Printl content
            emitCommentForProperty printLine p.Name

            // Treat window.name specially because of https://github.com/Microsoft/TypeScript/issues/9850
            if p.Name = "name" && i.Name = "Window" && emitScope = EmitScope.All then
                printLine "declare const name: never;"
            elif Option.isNone (getRemovedItemByName p.Name ItemKind.Property i.Name) then
                match getOverriddenItemByName p.Name ItemKind.Property i.Name with
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
                                    getEventTypeInInterface p.EventHandler.Value i
                                else
                                    "Event"
                            String.Format("({0}ev: {1}) => any", EmitEventHandlerThis flavor prefix i, eType)
                        | _ -> DomTypeToTsType p.Type
                    let pTypeAndNull = if p.Nullable.IsSome then makeNullable pType else pType
                    let readOnlyModifier = if p.ReadOnly.IsSome && prefix = "" then "readonly " else ""
                    printLine "%s%s%s: %s;" prefix readOnlyModifier p.Name pTypeAndNull

        // Note: the schema file shows the property doesn't have "static" attribute,
        // therefore all properties are emited for the instance type.
        if emitScope <> StaticOnly then
            match i.Properties with
            | Some ps ->
                ps.Properties
                |> Array.filter (ShouldKeep flavor)
                |> Array.iter emitProperty
            | None -> ()

            for addedItem in getAddedItems ItemKind.Property flavor do
                if (matchInterface i.Name addedItem) && (prefix <> "declare var " || addedItem.ExposeGlobally.IsNone || addedItem.ExposeGlobally.Value) then
                    emitCommentForProperty Pt.Printl addedItem.Name.Value
                    emitPropertyFromJson addedItem

    let EmitMethods flavor prefix (emitScope: EmitScope) (i: Browser.Interface) (conflictedMembers: Set<string>) =
        // Note: two cases:
        // 1. emit the members inside a interface -> no need to add prefix
        // 2. emit the members outside to expose them (for "Window") -> need to add "declare"
        let emitMethodFromJson (m: InputJsonType.Root) =
            m.Signatures |> Array.iter (Pt.Printl "%s%s;" prefix)

        let emitCommentForMethod (printLine: Printf.StringFormat<_, unit> -> _) (mName: string option) =
            if mName.IsSome then
                match CommentJson.GetCommentForMethod i.Name mName.Value with
                | Some comment -> printLine "%s" comment
                | _ -> ()

        // If prefix is not empty, then this is the global declare function addEventListener, we want to override this
        // Otherwise, this is EventTarget.addEventListener, we want to keep that.
        let mFilter (m:Browser.Method) =
            matchScope emitScope m &&
            not (prefix <> "" && OptionCheckValue "addEventListener" m.Name)

        let emitMethod flavor prefix (i:Browser.Interface) (m:Browser.Method) =
            let printLine content =
                if m.Name.IsSome && conflictedMembers.Contains m.Name.Value then Pt.PrintlToStack content else Pt.Printl content
            // print comment
            emitCommentForMethod printLine m.Name

            // Find if there are overriding signatures in the external json file
            // - overriddenType: meaning there is a better definition of this type in the json file
            // - removedType: meaning the type is marked as removed in the json file
            // if there is any conflicts between the two, the "removedType" has a higher priority over
            // the "overridenType".
            let removedType = Option.bind (fun name -> InputJson.getRemovedItemByName name InputJson.ItemKind.Method i.Name) m.Name
            let overridenType = Option.bind (fun mName -> InputJson.getOverriddenItemByName mName InputJson.ItemKind.Method i.Name) m.Name

            if removedType.IsNone then
                match overridenType with
                | Some t ->
                    match flavor with
                    | Flavor.All | Flavor.Web -> t.WebOnlySignatures |> Array.iter (printLine "%s%s;" prefix)
                    | _ -> ()
                    t.Signatures |> Array.iter (printLine "%s%s;" prefix)
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
                            match getAddedItemByName m.Name.Value ItemKind.SignatureOverload i.Name with
                            | Some ol -> ol.Signatures |> Array.iter (printLine "%s")
                            | _ -> ()

                        let overloads = GetOverloads (Function.Method m) false
                        for { ParamCombinations = pCombList; ReturnTypes = rTypes; Nullable = isNullable } in overloads do
                            let paramsString = ParamsToString pCombList
                            let returnString =
                                let returnType = rTypes |> List.map DomTypeToTsType |> String.concat " | "
                                if isNullable then makeNullable returnType else returnType
                            printLine "%s%s(%s): %s;" prefix (if m.Name.IsSome then m.Name.Value else "") paramsString returnString

        if i.Methods.IsSome then
            i.Methods.Value.Methods
            |> Array.filter mFilter
            |> Array.iter (emitMethod flavor prefix i)

        for addedItem in getAddedItems ItemKind.Method flavor do
            if (matchInterface i.Name addedItem && matchScope emitScope addedItem) then
                emitCommentForMethod Pt.Printl addedItem.Name
                emitMethodFromJson addedItem

        // The window interface inherited some methods from "Object",
        // which need to explicitly exposed
        if i.Name = "Window" && prefix = "declare function " then
            Pt.Printl "declare function toString(): string;"

    /// Emit the properties and methods of a given interface
    let EmitMembers flavor (prefix: string) (emitScope: EmitScope) (i:Browser.Interface) =
        let conflictedMembers = 
            match Map.tryFind i.Name extendConflictsBaseTypes with
            | Some conflict -> conflict.MemberNames
            | _ -> []
            |> Set.ofList
        EmitProperties flavor prefix emitScope i conflictedMembers
        let methodPrefix = if prefix.StartsWith("declare var") then "declare function " else ""
        EmitMethods flavor methodPrefix emitScope i conflictedMembers

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

        let emitEventHandler prefix (iParent:Browser.Interface) =
            Pt.Printl
                "%saddEventListener<K extends keyof %sEventMap>(type: K, listener: (this: %s, ev: %sEventMap[K]) => any, useCapture?: boolean): void;"
                prefix iParent.Name i.Name iParent.Name

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
            Pt.Printl
                "%saddEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;"
                fPrefix

    let EmitConstructorSignature (i:Browser.Interface) =
        let emitConstructorSigFromJson (c: InputJsonType.Root) =
            c.Signatures |> Array.iter (Pt.Printl "%s;")

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
                        Pt.Printl "new(%s): %s;" paramsString i.Name
                | _ -> Pt.Printl "new(): %s;" i.Name

        getAddedItems ItemKind.Constructor Flavor.All
        |> Array.filter (matchInterface i.Name)
        |> Array.iter emitConstructorSigFromJson

    let EmitConstructor flavor (i:Browser.Interface) =
        Pt.Printl "declare var %s: {" i.Name
        Pt.IncreaseIndent()

        Pt.Printl "prototype: %s;" i.Name
        EmitConstructorSignature i
        EmitConstants i
        let prefix = ""
        EmitMembers flavor prefix EmitScope.StaticOnly i

        Pt.DecreaseIndent()
        Pt.Printl "}"
        Pt.Printl ""

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
                Pt.Printl "declare var %s: {new(%s): %s; };" nc.Name (ParamsToString ncParams) i.Name)

    let EmitInterfaceDeclaration (i:Browser.Interface) =
        let processIName iName =
            match Map.tryFind iName extendConflictsBaseTypes with
            | Some _ -> iName + "Base"
            | _ -> iName
        
        let processedIName = processIName i.Name
        if processedIName <> i.Name then
            Pt.PrintlToStack "interface %s extends %s {" i.Name processedIName

        Pt.Printl "interface %s" processedIName
        let finalExtends =
            let overridenExtendsFromJson =
                InputJson.getOverriddenItemsByInterfaceName ItemKind.Extends Flavor.All i.Name
                |> Array.map (fun e -> e.BaseInterface.Value) |> List.ofArray

            let combinedExtends =
                if List.isEmpty overridenExtendsFromJson then
                    let extendsFromSpec =
                        match i.Extends::(List.ofArray i.Implements) with
                        | [""] | [] | ["Object"] -> []
                        | specExtends -> specExtends
                    let extendsFromJson =
                        InputJson.getAddedItemsByInterfaceName ItemKind.Extends Flavor.All i.Name
                        |> Array.map (fun e -> e.BaseInterface.Value) |> List.ofArray
                    List.concat [extendsFromSpec; extendsFromJson]
                else
                    overridenExtendsFromJson

            combinedExtends |> List.map processIName

        match finalExtends  with
        | [] -> ()
        | allExtends -> Pt.Print " extends %s" (String.Join(", ", allExtends))
        Pt.Print " {"

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
        let emitIndexerFromJson (id: InputJsonType.Root) =
            id.Signatures |> Array.iter (Pt.Printl "%s;")

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
                    Pt.Printl "[%s: %s]: %s;"
                        indexer.Name
                        (DomTypeToTsType indexer.Type)
                        (DomTypeToTsType m.Type))

        getAddedItems ItemKind.Indexer Flavor.All
        |> Array.filter (matchInterface i.Name)
        |> Array.iter emitIndexerFromJson

    let EmitInterfaceEventMap flavor (i:Browser.Interface) =
        let emitInterfaceEventMapEntry (eHandler: EventHandler)  =
            let eventType =
                getEventTypeInInterface eHandler.EventName i
            Pt.Printl "\"%s\": %s;" eHandler.EventName eventType

        let ownEventHandles = if iNameToEhList.ContainsKey i.Name && not iNameToEhList.[i.Name].IsEmpty then iNameToEhList.[i.Name] else []
        if ownEventHandles.Length > 0 then
            Pt.Printl "interface %sEventMap" i.Name
            if iNameToEhParents.ContainsKey i.Name && not iNameToEhParents.[i.Name].IsEmpty then
                let extends = iNameToEhParents.[i.Name] |> List.map (fun i -> i.Name + "EventMap")
                Pt.Print " extends %s" (String.Join(", ", extends))
            Pt.Print " {"
            Pt.IncreaseIndent()
            ownEventHandles |> List.iter emitInterfaceEventMapEntry
            Pt.DecreaseIndent()
            Pt.Printl "}"
            Pt.Printl ""

    let EmitInterface flavor (i:Browser.Interface) =
        Pt.ClearStack()
        EmitInterfaceEventMap flavor i

        Pt.ResetIndent()
        EmitInterfaceDeclaration i
        Pt.IncreaseIndent()

        let prefix = ""
        EmitMembers flavor prefix EmitScope.InstanceOnly i
        EmitConstants i
        EmitEventHandlers flavor prefix i
        EmitIndexers EmitScope.InstanceOnly i

        Pt.DecreaseIndent()
        Pt.Printl "}"
        Pt.Printl ""

        if not (Pt.StackIsEmpty()) then
            Pt.PrintStackContent()
            Pt.Printl "}"
            Pt.Printl ""

    let EmitStaticInterface flavor (i:Browser.Interface) =
        // Some types are static types with non-static members. For example,
        // NodeFilter is a static method itself, however it has an "acceptNode" method
        // that expects the user to implement.
        let hasNonStaticMember =
            let hasNonStaticMethod =
                let hasOwnNonStaticMethod =
                    i.Methods.IsSome &&
                    i.Methods.Value.Methods
                    |> Array.exists (fun m -> m.Static.IsNone && (m.Name.IsNone || (getRemovedItemByName m.Name.Value ItemKind.Method i.Name) |> Option.isNone))
                let hasAddedNonStaticMethod =
                    match InputJson.getAddedItemsByInterfaceName ItemKind.Method flavor i.Name with
                    | [||] -> false
                    | addedMs -> addedMs |> Array.exists (fun m -> m.Static.IsNone || not m.Static.Value)
                hasOwnNonStaticMethod || hasAddedNonStaticMethod
            let hasProperty =
                let hasOwnNonStaticProperty =
                    i.Properties.IsSome &&
                    i.Properties.Value.Properties
                    |> Array.exists (fun p -> getRemovedItemByName p.Name ItemKind.Method i.Name |> Option.isNone)
                let hasAddedNonStaticMethod =
                    match InputJson.getAddedItemsByInterfaceName ItemKind.Property flavor i.Name with
                    | [||] -> false
                    | addedPs -> addedPs |> Array.exists (fun p -> p.Static.IsNone || not p.Static.Value)
                hasOwnNonStaticProperty || hasAddedNonStaticMethod
            hasNonStaticMethod || hasProperty

        let emitAddedConstructor () =
            match InputJson.getAddedItemsByInterfaceName ItemKind.Constructor flavor i.Name with
            | [||] -> ()
            | ctors ->
                Pt.Printl "prototype: %s;" i.Name
                ctors |> Array.iter (fun ctor -> ctor.Signatures |> Array.iter (Pt.Printl "%s;"))

        // For static types with non-static members, we put the non-static members into an
        // interface, and put the static members into the object literal type of 'declare var'
        // For static types with only static members, we put everything in the interface.
        // Because in the two cases the interface contains different things, it might be easier to
        // read to separate them into two functions.
        let emitStaticInterfaceWithNonStaticMembers () =
            Pt.ResetIndent()
            EmitInterfaceDeclaration i
            Pt.IncreaseIndent()

            let prefix = ""
            EmitMembers flavor prefix EmitScope.InstanceOnly i
            EmitEventHandlers flavor prefix i
            EmitIndexers EmitScope.InstanceOnly i

            Pt.DecreaseIndent()
            Pt.Printl "}"
            Pt.Printl ""
            Pt.Printl "declare var %s: {" i.Name
            Pt.IncreaseIndent()
            EmitConstants i
            EmitMembers flavor prefix EmitScope.StaticOnly i
            emitAddedConstructor ()
            Pt.DecreaseIndent()
            Pt.Printl "}"
            Pt.Printl ""

        let emitPureStaticInterface () =
            Pt.ResetIndent()
            EmitInterfaceDeclaration i
            Pt.IncreaseIndent()

            let prefix = ""
            EmitMembers flavor prefix EmitScope.StaticOnly i
            EmitConstants i
            EmitEventHandlers flavor prefix i
            EmitIndexers EmitScope.StaticOnly i
            emitAddedConstructor ()
            Pt.DecreaseIndent()
            Pt.Printl "}"
            Pt.Printl "declare var %s: %s;" i.Name i.Name
            Pt.Printl ""

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
            | "Object" -> Pt.Printl "interface %s {" dict.Name
            | _ -> Pt.Printl "interface %s extends %s {" dict.Name dict.Extends

            let emitJsonProperty (p: InputJsonType.Root) =
                Pt.Printl "%s: %s;" p.Name.Value p.Type.Value

            let removedPropNames =
                getRemovedItems ItemKind.Property flavor
                |> Array.choose (fun rp -> if matchInterface dict.Name rp then Some(rp.Name.Value) else None)
                |> Set.ofArray
            let addedProps =
                getAddedItems ItemKind.Property flavor
                |> Array.filter (matchInterface dict.Name)

            Pt.IncreaseIndent()
            Array.iter emitJsonProperty addedProps
            if dict.Members.IsSome then
                dict.Members.Value.Members
                |> Array.filter (fun m -> not (Set.contains m.Name removedPropNames))
                |> Array.iter (fun m ->
                    match (getOverriddenItemByName m.Name ItemKind.Property dict.Name) with
                    | Some om -> emitJsonProperty om
                    | None -> Pt.Printl "%s?: %s;" m.Name (DomTypeToTsType m.Type))
            Pt.DecreaseIndent()
            Pt.Printl "}"
            Pt.Printl ""

        browser.Dictionaries
        |> Array.filter (fun dict -> flavor <> Worker || knownWorkerInterfaces.Contains dict.Name)
        |> Array.iter emitDictionary

        if flavor = Worker then
            worker.Dictionaries |> Array.iter emitDictionary

    let EmitAddedInterface (ai: InputJsonType.Root) =
        match ai.Extends with
        | Some e -> Pt.Printl "interface %s extends %s {" ai.Name.Value ai.Extends.Value
        | None -> Pt.Printl "interface %s {" ai.Name.Value

        let emitProperty (p: InputJsonType.Property) =
            let readOnlyModifier =
                match p.Readonly with
                | Some(true) -> "readonly "
                | _ -> ""
            match CommentJson.GetCommentForProperty ai.Name.Value p.Name with
            | Some comment -> Pt.PrintWithAddedIndent "%s" comment
            | _ -> ()
            Pt.PrintWithAddedIndent "%s%s: %s;" readOnlyModifier p.Name p.Type

        let emitMethod (m: InputJsonType.Method) =
            match CommentJson.GetCommentForMethod ai.Name.Value m.Name with
            | Some comment -> Pt.PrintWithAddedIndent "%s" comment
            | _ -> ()
            m.Signatures |> Array.iter (Pt.PrintWithAddedIndent "%s;")


        ai.Properties |> Array.iter emitProperty
        ai.Methods |> Array.iter emitMethod
        ai.Indexer |> Array.collect (fun i -> i.Signatures) |> Array.iter (Pt.PrintWithAddedIndent "%s;")
        Pt.Printl "}"
        Pt.Printl ""

        if ai.ConstructorSignatures.Length > 0 then
            Pt.Printl "declare var %s: {" ai.Name.Value
            Pt.PrintWithAddedIndent "prototype: %s;" ai.Name.Value
            match CommentJson.GetCommentForConstructor ai.Name.Value with
            | Some comment -> Pt.PrintWithAddedIndent "%s" comment
            | _ -> ()
            ai.ConstructorSignatures |> Array.iter (Pt.PrintWithAddedIndent "%s;")
            Pt.Printl "}"
            Pt.Printl ""

    let EmitTypeDefs flavor =
        let emitTypeDef (typeDef: Browser.Typedef) =
            Pt.Printl "type %s = %s;" typeDef.NewType (DomTypeToTsType typeDef.Type)
        let emitTypeDefFromJson (typeDef: InputJsonType.Root) =
            Pt.Printl "type %s = %s;" typeDef.Name.Value typeDef.Type.Value

        match flavor with
        | Flavor.Worker ->
            browser.Typedefs
            |> Array.filter (fun typedef -> knownWorkerInterfaces.Contains typedef.NewType)
            |> Array.iter emitTypeDef
        | _ ->
            browser.Typedefs
            |> Array.filter (fun typedef -> getRemovedItemByName typedef.NewType ItemKind.TypeDef "" |> Option.isNone)
            |> Array.iter emitTypeDef

        InputJson.getAddedItems ItemKind.TypeDef flavor
        |> Array.iter emitTypeDefFromJson

    let EmitTheWholeThing flavor (target:TextWriter) =
        Pt.Reset()
        Pt.Printl "/////////////////////////////"
        match flavor with
        | Worker -> Pt.Printl "/// IE Worker APIs"
        | _ -> Pt.Printl "/// IE DOM APIs"
        Pt.Printl "/////////////////////////////"
        Pt.Printl ""

        EmitDictionaries flavor
        browser.CallbackInterfaces.Interfaces |> Array.iter EmitCallBackInterface 
        EmitNonCallbackInterfaces flavor

        // Add missed interface definition from the spec
        InputJson.getAddedItems InputJson.Interface flavor |> Array.iter EmitAddedInterface

        Pt.Printl "declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;"
        Pt.Printl ""

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

        fprintf target "%s" (Pt.GetResult())
        target.Flush()
        target.Close()

    let EmitDomWeb () =
        EmitTheWholeThing Flavor.All GlobalVars.tsWebOutput

    let EmitDomWorker () =
        ignoreDOMTypes <- true
        EmitTheWholeThing Flavor.Worker GlobalVars.tsWorkerOutput
