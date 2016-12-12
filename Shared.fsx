#r "packages/FSharp.Data/lib/net40/FSharp.Data.dll"
#r "System.Xml.Linq.dll"

open FSharp.Data
open System.IO
open System
open System.Text
open System.Collections.Generic
open Microsoft.FSharp.Reflection

/// ===========================================
/// Global variables
/// ===========================================
module GlobalVars =
    if not (Directory.Exists(__SOURCE_DIRECTORY__ + @"/generated")) then
        Directory.CreateDirectory(__SOURCE_DIRECTORY__ + @"/generated") |> ignore

    let inputFolder = __SOURCE_DIRECTORY__ + @"/inputfiles"
    let makeTextWriter fileName = File.CreateText(__SOURCE_DIRECTORY__ + @"/generated/" + fileName) :> TextWriter
    // let jsWebOutput = makeTextWriter "domWeb.js"
    // let jsWinOutput = makeTextWriter "domWindows.js"
    // let jsWorkerOutput = makeTextWriter "dedicatedworker.js"
    let tsWebOutput = makeTextWriter "dom.generated.d.ts"
    let tsWorkerOutput = makeTextWriter "webworker.generated.d.ts"
    let defaultEventType = "Event"

/// ===========================================
/// Types
/// ===========================================

/// Quick checker for option type values
let OptionCheckValue value = function
    | Some v when v = value -> true
    | _ -> false

let unionToString (x: 'a) =
    match FSharpValue.GetUnionFields(x, typeof<'a>) with
    | case, _ -> case.Name

type Flavor =
    | Worker
    | Web
    | All
    override x.ToString() = unionToString x

type Browser = XmlProvider<"sample.xml", Global=true>

module JsonItems =
    type ItemsType = JsonProvider<"inputfiles/sample.json">

    let overriddenItems =
        File.ReadAllText(GlobalVars.inputFolder + @"/overridingTypes.json") |> ItemsType.Parse

    let removedItems =
        File.ReadAllText(GlobalVars.inputFolder + @"/removedTypes.json") |> ItemsType.Parse

    let addedItems =
        File.ReadAllText(GlobalVars.inputFolder + @"/addedTypes.json") |> ItemsType.Parse

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

    let findItem (allItems: ItemsType.Root []) (itemName: string) (kind: ItemKind) otherFilter =
        let filter (item: ItemsType.Root) =
            OptionCheckValue itemName item.Name &&
            item.Kind.ToLower() = kind.ToString() &&
            otherFilter item
        allItems |> Array.tryFind filter

    let matchInterface iName (item: ItemsType.Root) =
        item.Interface.IsNone || item.Interface.Value = iName

    let findOverriddenItem itemName (kind: ItemKind) iName =
        findItem overriddenItems itemName kind (matchInterface iName)

    let findRemovedItem itemName (kind: ItemKind) iName =
        findItem removedItems itemName kind (matchInterface iName)

    let findAddedItem itemName (kind: ItemKind) iName =
        findItem addedItems itemName kind (matchInterface iName)

    let getItems (allItems: ItemsType.Root []) (kind: ItemKind) (flavor: Flavor) =
        allItems
        |> Array.filter (fun t ->
            t.Kind.ToLower() = kind.ToString() &&
            (t.Flavor.IsNone || t.Flavor.Value = flavor.ToString() || flavor = All))

    let getOverriddenItems = getItems overriddenItems
    let getAddedItems = getItems addedItems
    let getRemovedItems = getItems removedItems

    let getAddedItemsByInterfaceName kind flavor iName =
        getAddedItems kind flavor |> Array.filter (matchInterface iName)
    let getOverriddenItemsByInterfaceName kind flavor iName =
        getOverriddenItems kind flavor |> Array.filter (matchInterface iName)
    let getRemovedItemsByInterfaceName kind flavor iName =
        getRemovedItems kind flavor |> Array.filter (matchInterface iName)

module Comments =
    type CommentType = JsonProvider<"inputfiles/comments.json">

    let comments = File.ReadAllText(__SOURCE_DIRECTORY__ + @"/inputfiles/comments.json") |> CommentType.Parse

    let GetCommentForProperty iName pName =
        match comments.Interfaces |> Array.tryFind (fun i -> i.Name = iName) with
        | Some i ->
            match i.Members.Property |> Array.tryFind (fun p -> p.Name = pName) with
            | Some p -> Some p.Comment
            | _ -> None
        | _ -> None

    let GetCommentForMethod iName mName =
        match comments.Interfaces |> Array.tryFind (fun i -> i.Name = iName) with
        | Some i ->
            match i.Members.Method |> Array.tryFind (fun m -> m.Name = mName) with
            | Some m -> Some m.Comment
            | _ -> None
        | _ -> None

// Printer for print to file
type Printer(target : TextWriter) =
    let output = StringBuilder()
    let mutable curTabCount = 0
    member this.getCurIndent() = String.replicate curTabCount "    "
    member this.target = target
    member this.print content = Printf.kprintf (fun s -> output.Append s |> ignore) content
    member this.printl content =
        Printf.kprintf (fun s -> output.Append("\r\n" + this.getCurIndent() + s) |> ignore) content
    member this.increaseIndent() = curTabCount <- curTabCount + 1
    member this.decreaseIndent() = curTabCount <- Math.Max(curTabCount - 1, 0)

    member this.startBrace() =
        this.printl "{"
        this.increaseIndent()

    member this.endBrace() =
        this.decreaseIndent()
        this.printl "}"

    member this.resetIndent() = curTabCount <- 0
    member this.printWithAddedIndent content =
        Printf.kprintf (fun s -> output.Append("\r\n" + this.getCurIndent() + "    " + s) |> ignore) content

    member this.emit() =
        fprintf this.target "%s" (output.ToString())
        this.target.Flush()

    member this.close() = this.target.Close()

// Printer for print to string
type StringPrinter() =
    let output = StringBuilder()
    let mutable curTabCount = 0
    member this.getCurIndent() = String.replicate curTabCount "    "
    member this.print content = Printf.kprintf (fun s -> output.Append s |> ignore) content
    member this.printl content =
        Printf.kprintf (fun s -> output.Append("\r\n" + this.getCurIndent() + s) |> ignore) content
    member this.increaseIndent() = curTabCount <- curTabCount + 1
    member this.setIndent indentNum = curTabCount <- indentNum
    member this.decreaseIndent() = curTabCount <- Math.Max(curTabCount - 1, 0)
    member this.resetIndent() = curTabCount <- 0
    member this.printWithAddedIndent content =
        Printf.kprintf (fun s -> output.Append("\r\n" + this.getCurIndent() + "    " + s) |> ignore) content
    member this.getResult() = output.ToString()
    member this.clear() = output.Clear() |> ignore
    member this.reset() =
        this.clear()
        this.resetIndent()

type Event =
    { Name : string
      Type : string }

/// Method parameter
type Param =
    { Type : string
      Name : string
      Optional : bool
      Variadic : bool
      Nullable : bool }

/// Function overload
type Overload =
    { ParamCombinations : Param list
      ReturnTypes : string list
      Nullable : Boolean }
    member this.IsEmpty = this.ParamCombinations.IsEmpty && (this.ReturnTypes = [ "void" ] || this.ReturnTypes = [ "" ])

type Function =
    | Method of Browser.Method
    | Ctor of Browser.Constructor
    | CallBackFun of Browser.CallbackFunction

// Note:
// Eventhandler's name and the eventName are not just off by "on".
// For example, handlers named "onabort" may handle "SVGAbort" event in the XML file
type EventHandler =
    { Name : string
      EventName : string
      EventType : string }

/// Decide which members of a function to emit
type EmitScope =
    | StaticOnly
    | InstanceOnly
    | All

// Used to decide if a member should be emitted given its static property and
// the intended scope level.
let inline matchScope scope (x: ^a when ^a: (member Static: Option<'b>)) =
    if scope = EmitScope.All then true
    else
        let isStatic = (^a: (member Static: Option<'b>)x)
        if isStatic.IsSome then scope = EmitScope.StaticOnly
        else scope = EmitScope.InstanceOnly

let matchInterface iName (x: JsonItems.ItemsType.Root) =
    x.Interface.IsNone || x.Interface.Value = iName

/// ===========================================
/// Shared data and helper functions
/// ===========================================
/// Add the 'Seq.contains' method to the Seq module
module Seq =
    let contains e s = Seq.exists ((=) e) s

type String with
    member this.TrimStartString str =
        if this.StartsWith(str) then this.Substring(str.Length)
        else this

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
/// (Member constraint aka duck typing)
/// reason is that ^a can be an interface, property or method, but they
/// all share a 'tag' property
let inline ShouldKeep flavor (i : ^a when ^a : (member Tags : string option)) =
    let filterByTag =
        match ((((((^a : (member Tags : string option) i)))))) with
        | Some tags ->
            // Check if should be included
            match flavor with
            | Flavor.Web ->
                [ "MSAppOnly"; "WinPhoneOnly" ]
                |> Seq.exists (fun t -> tags.Contains t)
                |> not
            | Flavor.All -> true
            | Flavor.Worker ->
                [ "IEOnly" ]
                |> Seq.exists (fun t -> tags.Contains t)
                |> not
        | _ -> true
    filterByTag

// Global interfacename to interface object map
let allWebNonCallbackInterfaces = Array.concat [| browser.Interfaces; browser.MixinInterfaces.Interfaces |]

let allWebInterfaces =
    Array.concat [| browser.Interfaces; [| browser.CallbackInterfaces.Interface |]; browser.MixinInterfaces.Interfaces |]

let allWorkerAdditionalInterfaces = Array.concat [| worker.Interfaces; worker.MixinInterfaces.Interfaces |]
let allInterfaces = Array.concat [| allWebInterfaces; allWorkerAdditionalInterfaces |]

let allInterfacesMap =
    [ for i in allInterfaces do
          yield (i.Name, i) ]
    |> Map.ofList

let allDictionariesMap =
    Array.concat [| browser.Dictionaries; worker.Dictionaries |]
    |> Array.map (fun d -> (d.Name, d))
    |> Map.ofArray

let allEnumsMap =
    Array.concat [| browser.Enums; worker.Enums |]
    |> Array.map (fun e -> (e.Name, e))
    |> Map.ofArray

let allCallbackFuncs =
    Array.concat [| browser.CallbackFunctions; worker.CallbackFunctions |]
    |> Array.map (fun c -> (c.Name, c))
    |> Map.ofArray

let GetInterfaceByName = allInterfacesMap.TryFind
let knownWorkerInterfaces =
    [ "Algorithm"; "AlgorithmIdentifier"; "KeyAlgorithm"; "CryptoKey"; "AbstractWorker"; "AudioBuffer"; "Blob";
      "CloseEvent"; "Console"; "Coordinates"; "DecodeSuccessCallback";
      "DecodeErrorCallback"; "DOMError"; "DOMException"; "DOMStringList"; "ErrorEvent"; "Event"; "ErrorEventHandler";
      "EventException"; "EventInit"; "EventListener"; "EventTarget"; "File"; "FileList"; "FileReader";
      "FunctionStringCallback"; "IDBCursor"; "IDBCursorWithValue"; "IDBDatabase"; "IDBFactory"; "IDBIndex";
      "IDBKeyRange"; "IDBObjectStore"; "IDBOpenDBRequest"; "IDBRequest"; "IDBTransaction"; "IDBVersionChangeEvent";
      "ImageData"; "MediaQueryList"; "MediaQueryListListener"; "MessageChannel"; "MessageEvent"; "MessagePort"; "MSApp";
      "MSAppAsyncOperation"; "MSAppView"; "MSBaseReader"; "MSBlobBuilder"; "MSExecAtPriorityFunctionCallback";
      "MSLaunchUriCallback"; "MSStream"; "MSStreamReader"; "MSUnsafeFunctionCallback"; "NavigatorID"; "NavigatorOnLine";
      "Position"; "PositionCallback"; "PositionError"; "PositionErrorCallback"; "ProgressEvent"; "WebSocket";
      "WindowBase64"; "WindowConsole"; "Worker"; "XMLHttpRequest"; "XMLHttpRequestEventTarget"; "XMLHttpRequestUpload";
      "IDBObjectStoreParameters"; "IDBIndexParameters"; "IDBKeyPath"]
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
        let isFromBrowserXml =
            allWebNonCallbackInterfaces |> Array.filter (fun i -> knownWorkerInterfaces.Contains i.Name)
        Array.append isFromBrowserXml allWorkerAdditionalInterfaces

let GetPublicInterfacesByFlavor flavor =
    match flavor with
    | Flavor.Web | Flavor.All -> browser.Interfaces |> Array.filter (ShouldKeep flavor)
    | Flavor.Worker ->
        let isFromBrowserXml = browser.Interfaces |> Array.filter (fun i -> knownWorkerInterfaces.Contains i.Name)
        Array.append isFromBrowserXml worker.Interfaces

let GetCallbackFuncsByFlavor flavor =
    browser.CallbackFunctions
    |> Array.filter (ShouldKeep flavor)
    |> Array.filter (fun cb -> flavor <> Flavor.Worker || knownWorkerInterfaces.Contains cb.Name)

/// Event name to event type map
let eNameToEType =
    [ for i in allWebNonCallbackInterfaces do
          if i.Events.IsSome then yield! i.Events.Value.Events ]
    |> List.map (fun (e : Browser.Event) ->
           let eType =
               match e.Name with
               | "abort" -> "UIEvent"
               | "complete" -> "Event"
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

let getEventTypeInInterface eName iName =
    match iName, eName with
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
        match eNameToEType.TryFind eName with
        | Some eType' -> eType'
        | _ -> "Event"

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
    let rec GetExtendList(iName : string) =
        match GetInterfaceByName iName with
        | Some i ->
            match i.Extends with
            | "Object" -> []
            | super -> super :: (GetExtendList super)
        | _ -> []

    let GetImplementList(iName : string) =
        match GetInterfaceByName iName with
        | Some i -> List.ofArray i.Implements
        | _ -> []

    Array.concat [| allWebNonCallbackInterfaces; worker.Interfaces; worker.MixinInterfaces.Interfaces |]
    |> Array.map (fun i ->
           (i.Name,
            List.concat [ (GetExtendList i.Name)
                          (GetImplementList i.Name) ]))
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
        |> Array.filter (fun i -> i.Extends = "Event")
        |> Array.map (fun i -> i.Name)
        |> Array.filter (fun n -> n.EndsWith("Event") && not (List.contains n usedEvents))
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
    let GetEventTypeFromHandler (p : Browser.Property) (i : Browser.Interface) =
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
    let rec GetEventHandler(i : Browser.Interface) =
        let ownEventHandler =
            match i.Properties with
            | Some ps ->
                ps.Properties
                |> Array.choose (fun p' ->
                       if p'.Type = "EventHandler" && p'.EventHandler.IsSome then
                           Some({ Name = p'.Name
                                  EventName = p'.EventHandler.Value
                                  EventType = GetEventTypeFromHandler p' i })
                       else None)
                |> List.ofArray
            | None -> []
        if ownEventHandler.Length > 0 then ownEventHandler else []

    allInterfaces
    |> Array.map (fun i -> (i.Name, GetEventHandler i))
    |> Map.ofArray

let iNameToEhParents =
    let hasHandler (i : Browser.Interface) =
        iNameToEhList.ContainsKey i.Name && not iNameToEhList.[i.Name].IsEmpty

    // Get all the event handlers from an interface and also from its inherited / implemented interfaces
    let rec GetEventHandler(i : Browser.Interface) =
        let extendedEventHandler =
            match GetInterfaceByName i.Extends with
            | Some i when hasHandler i -> [i]
            | _ -> []

        let implementedEventHandler =
            let implementis = i.Implements |> Array.map GetInterfaceByName
            [ for i' in implementis do
                  yield! match i' with
                         | Some i ->  if hasHandler i then [i] else []
                         | None -> [] ]

        List.concat [ extendedEventHandler; implementedEventHandler ]

    allInterfaces
    |> Array.map (fun i -> (i.Name, GetEventHandler i))
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
    [ ("close", "CloseEvent")
      ("error", "ErrorEvent")
      ("upgradeneeded", "IDBVersionChangeEvent")
      ("message", "MessageEvent")
      ("loadend", "ProgressEvent")
      ("progress", "ProgressEvent") ]
    |> Map.ofList

let typeDefSet =
    browser.Typedefs |> Array.map (fun td -> td.NewType) |> Set.ofArray

module Option =
    let runIfSome f x =
        match x with
        | Some x' -> f x'
        | _ -> ()

    let toBool f x =
        match x with
        | Some x' -> f x'
        | _ -> false