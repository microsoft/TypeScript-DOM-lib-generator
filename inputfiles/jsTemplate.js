var document = { };
(function () {
    var _eventManager = _$createEventManager(
        function getEventObject(type, attach, obj, ignoreCase) {
            function _eventTypeToObject(type, attach) {
                if (attach) return Event;
                <@ EventTypeToObjSwitchStatements @>
                return Event;
            }
            function _eventTypeToObjectIgnoreCase(type, attach) {
                if (attach) return Event;
                type = type.toLowerCase();
                <@ EventTypeToObjSwitchStatementsIgnoreCase @>
                return Event;
            }
            var e = ignoreCase ? _eventTypeToObjectIgnoreCase(type, attach) : _eventTypeToObject(type, attach);
            var eventObject = Object.create(e);
            eventObject.target = obj;
            eventObject.currentTarget = obj;
            eventObject.type = type;
            if (eventObject.relatedTarget)
                eventObject.relatedTarget = obj;
            return eventObject;
        });
    var _events = _eventManager.createEventProperties;


    function _createEvent(eventType) {
        function _eventTypeToObject(eventType) {
            if (eventType && typeof eventType === 'string') {
                <@ CreateEventSwitchStatements @>
            }
        }
        var e = _eventTypeToObject(eventType);
        if (!e) e = Event;
        return Object.create(e);
    }

    function _getElementByTagName(tagName) {
        if (typeof tagName !== 'string') return;
        <@ GetElementsByTagNameSwitchStatements @>
    }

    function _getNewElementByTagName(tagName) {
        if (typeof tagName !== 'string') return;
        var element = Object.create(_getElementByTagName(tagName));
        element.localName = tagName;
        element.tagName = element.nodeName = tagName.toUpperCase(); 
        return element;
    }

    function _createDomObject(name) {
        return Window[name] && Window[name].prototype && Object.create(Window[name].prototype);
    }

    function _isAsyncScript(object) {
        return object && HTMLScriptElement.isPrototypeOf(object);
    }

    function _createElementByTagName(tagName) {
        if (typeof tagName !== 'string') return;
        var element = _getNewElementByTagName(tagName);
        element._$searchable = true;
        return element;
    }

    function _wrapInList(list, resultListType, missingValueType, outputList) {
        var nodeList = typeof outputList !== 'undefined' ? outputList : Object.create(resultListType);
        var originalOutputListLength = typeof outputList !== 'undefined' ? outputList.length : 0;
        if (list) {
            for (var i = 0; i< list.length; i++) {
                nodeList[i] = list[i];
            }
            // clear any remaining items in outputList
            for (var i = list.length; i< originalOutputListLength; i++) {
                nodeList[i] = undefined;
            }
            nodeList.length = list.length;
        }
        if (missingValueType && nodeList.length === 0)
            nodeList[0] = _$getTrackingUndefined(missingValueType);
        return nodeList;
    }

    function _createHTMLCollection(elementType) {
        var result = Object.create(HTMLCollection);
        result[0] = _$getTrackingNull(_createElementByTagName(elementType));
        return result;
    }

    var _defaultScripts = [];

    function _scriptInDefaultList(scriptElement) {
        var found = false;
        if (scriptElement && scriptElement.src && _defaultScripts && _defaultScripts.length > 0) {
            _defaultScripts.forEach(function (entry) {
                if (scriptElement.src == entry.src)
                    found = true;
            });
        }
        return found;
    }

    function _getElementsByTagName(source, tagName) {
        var result = [];
        if (typeof tagName === 'string') {
            tagName = tagName.toLowerCase();
            if (source && source._$searchable)
                return _findElementsByTagName(source, tagName);
            else if (tagName === 'script') {
                if (_defaultScripts.length > 0)
                    result = _$asyncRequests.getItems().length == 1 ? _defaultScripts : _defaultScripts.concat(_$asyncRequests.getItems());
                else
                    result = _$asyncRequests.getItems();
            }
            else
                result = [ _getNewElementByTagName(tagName) ];
        }
        return _wrapInList(result, NodeList, _getNewElementByTagName(tagName));
    }

    function _findElementsByTagName(source, tagName, outputList) {
        var elements = [];
        _visitChildNodes(source, function(e) { 
            if (_isElement(e) && ('*' == tagName || e.tagName.toLowerCase() == tagName)) elements.push(e);        
        });
        var result = _wrapInList(elements, NodeList, _getNewElementByTagName(tagName), outputList);
        if (typeof outputList === 'undefined') {
            if (typeof source._$queries === 'undefined')
                source._$queries = [];
            source._$queries.push({queryString: tagName, result: result});
        }
        return result;
    }

    function _visitChildNodes(start, callback) {
        if (_isNode(start) && _hasChildNodes(start)) {
                var q = [];
                q = q.concat(_childNodeList(start));
                var c = 0;
                while (q.length > 0 && c++ < 1000) {
                        var e = q.shift();
                        if (_isNode(e)) { 
                            callback(e);
                            if (_hasChildNodes(e)) q = q.concat(_childNodeList(e));
                        }
                }
        }
    }

    function _refreshQueries(node){
        if (_isNode(node)){
            if (node._$queries)
                for(var i =0; i < node._$queries.length; i++)
                    _findElementsByTagName(node, node._$queries[i].queryString, node._$queries[i].result); 
                // referesh the parent queries
                _refreshQueries(node.parentNode);
        }
    }

    function _embedAsyncRequest(originalObject, asyncRequest) {
        if (originalObject) {
            var newObject = Object.create(originalObject);
            _$defineProperty(newObject, '_$asyncRequest', asyncRequest);
            return newObject;
        }
        return originalObject;
    }

    function _getEmbeddedAsyncRequest(obj) {
        return (obj && obj._$asyncRequest) ? obj._$asyncRequest : obj;
    }

    function _isNode(n) {
        return typeof n !== 'undefined' && n && Node.isPrototypeOf(n);
    }

    function _isElement(e) {
        return typeof e !== 'undefined' && e && Element.isPrototypeOf(e);
    }

    function _getMatchingNull(obj) {
        return _$getTrackingNull(Object.create(_isElement(obj) ? HTMLElement : Node));
    }

    function _isParentOf(parent, obj) {
        if (obj) {
            var cur = obj.parentNode;
            while (cur) {
                if (cur == parent) 
                    return true;
                cur = cur.parentNode;
            }
        }
        return false;
    }

    function _childNodes(obj, resultListType) {
        if (typeof obj._$children === 'undefined')
            obj._$children = Object.create(resultListType);
        return obj._$children;
    }

    function _childNodeList(obj) {
        return typeof obj._$children !== 'undefined'? Array.prototype.slice.call(obj._$children) : [];
    }

    function _hasChildNodes(obj) {
        return typeof obj._$children !== 'undefined' && obj._$children.length > 0;
    }

    function _firstChild(obj, defaultObj) {
        return _hasChildNodes(obj) ? obj._$children[0] : _$getTrackingNull(Object.create(_isElement(obj) ? HTMLElement : defaultObj));
    }

    function _lastChild(obj, defaultObj) {
        return _hasChildNodes(obj) ? obj._$children[obj._$children.length - 1] : _$getTrackingNull(Object.create(_isElement(obj) ? HTMLElement : defaultObj));
    }

    function _clearElement(obj) {
        if (_hasChildNodes(obj)) {
            for (var i = 0; i < obj._$children.length; i++)
                obj._$children[i].parentNode = obj._$children[i].nextSibling = obj._$children[i].previousSibling = _getMatchingNull(obj._$children[i]);
            obj._$children = undefined;
            _refreshQueries(obj);
        }
    }

    function _removeChild(obj, oldChild) {
        if (_isNode(oldChild) && _hasChildNodes(obj)) {
            for (var i = 0; i < obj._$children.length; i++) {
                if (oldChild == obj._$children[i]) {
                    if (oldChild.previousSibling) {
                        oldChild.previousSibling.nextSibling = oldChild.nextSibling;
                    }
                    if (oldChild.nextSibling) {
                        oldChild.nextSibling.previousSibling = oldChild.previousSibling;
                    }
                    Array.prototype.splice.call(obj._$children, i, 1);
                    oldChild.parentNode = oldChild.nextSibling = oldChild.previousSibling = _getMatchingNull(obj);
                    _refreshQueries(obj);
                    break;
                }
            }
        }
        return oldChild;
    }

    function _appendChildInternal(obj, newChild) {
        if (_isNode(newChild) && obj != newChild && !_isParentOf(newChild, obj)) {
            if (newChild.parentNode)
                _removeChild(newChild.parentNode, newChild);
            if (typeof obj._$children === 'undefined')
                obj._$children = Object.create(NodeList);
            var previousSibling = obj._$children.length >= 1 ? obj._$children[obj._$children.length - 1] : null;
            Array.prototype.push.call(obj._$children, newChild);
            newChild.parentNode = obj;
            if (previousSibling) {
                newChild.previousSibling = previousSibling;
                previousSibling.nextSibling = newChild;
            }
            _refreshQueries(obj);
        }
        return newChild;
    }

    function _appendChild(obj, newChild) {
        if (_isAsyncScript(newChild) && !_scriptInDefaultList(newChild))
            _$asyncRequests.add(newChild);
        return _appendChildInternal(obj, newChild);
    }

    function _insertBefore(obj, newChild, refChild) {
        if (_isNode(newChild) && obj != newChild && !_isParentOf(newChild, obj)) {
            if (newChild.parentNode)
                _removeChild(newChild.parentNode, newChild);
            if (typeof obj._$children === 'undefined')
                obj._$children = Object.create(NodeList);
            var index = 0;
            var nextSibling = null;
            var previousSibling = null;
            for (index = 0; index < obj._$children.length; index++) {
                if (refChild == obj._$children[index]) {
                    nextSibling = refChild;
                    break;
                }
                previousSibling = obj._$children[index];
            }
            Array.prototype.splice.call(obj._$children, index, 0, newChild);
            newChild.parentNode = obj;
            if (nextSibling) {
                newChild.nextSibling = nextSibling;
                nextSibling.previousSibling = newChild;
            }
            if (previousSibling) {
                newChild.previousSibling = previousSibling;
                previousSibling.nextSibling = newChild;
            }
            _refreshQueries(obj);
        }
        if (_isAsyncScript(newChild) && !_scriptInDefaultList(newChild))
            _$asyncRequests.insertBefore(newChild, _getEmbeddedAsyncRequest(refChild));
        return newChild;
    }

    function _replaceChild(obj, newChild, oldChild) {
        if (_isNode(newChild) && obj != newChild && !_isParentOf(newChild, obj) && _isNode(oldChild) && _hasChildNodes(obj)) {
            for (var i = 0; i < obj._$children.length; i++) {
                if (oldChild == obj._$children[i]) {
                    if (newChild.parentNode)
                        _removeChild(newChild.parentNode, newChild);
                    newChild.previousSibling = oldChild.previousSibling;
                    newChild.nextSibling = oldChild.nextSibling;
                    if (oldChild.previousSibling) {
                        oldChild.previousSibling.nextSibling = newChild;
                    }
                    if (oldChild.nextSibling) {
                        oldChild.nextSibling.previousSibling = newChild;
                    }
                    newChild.parentNode = obj;
                    obj._$children[i] = newChild;
                    oldChild.parentNode =    oldChild.nextSibling = oldChild.previousSibling = _getMatchingNull(obj);
                    _refreshQueries(obj);
                    break;
                }
            }
        }
        if (_isAsyncScript(newChild) && !_scriptInDefaultList(newChild))
            _$asyncRequests.replace(newChild, _getEmbeddedAsyncRequest(oldChild));
        return oldChild;
    }

    function _firstElementChild(obj) {
        if (_isNode(obj)) {
            var cur = _firstChild(obj);
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.nextSibling;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _lastElementChild(obj) {
        if (_isNode(obj)) {
            var cur = _lastChild(obj);
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.previousSibling;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _nextElementSibling(obj) {
        if (_isNode(obj)) {
            var cur = obj.nextSibling;
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.nextSibling;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _previousElementSibling(obj) {
        if (_isNode(obj)) {
            var cur = obj.previousSibling;
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.previousSibling;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _parentElement(obj) {
        if (_isNode(obj)) {
            var cur = obj.parentNode;
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.parentNode;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _childElementCount(obj) {
        var count = 0;
        if (_isNode(obj)) {
            var cur = _firstChild(obj);
            do {
                if (_isElement(cur))
                    count ++;
                cur = cur.nextSibling;
            } while (cur);
        }
        return count;
    }

    function _applyElement(obj, apply, where) {
        if (!obj || !apply) return;
        if (where === undefined || where == "outside") {
            if (!obj.parentNode) return;
            _replaceChild(obj.parentNode, apply, obj);
            _appendChild(apply, obj);
        } 
        else if (where == 'inside') {
            var children = obj._$children !== undefined ? Array.prototype.slice.call(obj._$children) : [];
            for(i=0; i<children.length; i++) {
                _removeChild(obj, children[i]);
            }
            _appendChild(obj, apply);
            for(i=0; i<children.length; i++) {
                _appendChild(apply, children[i]);
            }
        }
    }

    function _hasAttribute(object, name) {
        if (object)
            return object.hasOwnProperty(name);
        else
            return false;
    }

    function _setAttribute(object, name, value) {
        if (object)
            object[name] = value;
    }

    function _getAttribute(object, name) {
        if (_hasAttribute(object, name))
            return object[name];
        else 
            return null;
    }

    function _recordElementId(id, e) {
        if (typeof document._$documentElements != 'object')
            document._$documentElements = {};
        document._$documentElements[id] = e;
    }

    function _lookupElement(id) {
        return (document._$documentElements && document._$documentElements[id]);
    }

    function _getElementById(elementId) {
        var element = _lookupElement(elementId) || Object.create(HTMLElement);
        element.id = elementId;
        return element;
    }

    var scriptTagRegEx = /<[\s]*script[^>]*src[\s]*=[\s]*['"]([^'">]+)['"]/gim;
    function _setInnerHTML(source, content) {
            // since we are not parsing the inner html, mark the node as unsearchable
            source._$searchable = false;
            var scriptTag = null;
            while (scriptTag = scriptTagRegEx.exec(content)) {
                    var scriptElement = Object.create(HTMLScriptElement);
                    scriptElement.src = scriptTag[1];
                    if (!_scriptInDefaultList(scriptElement))
                        _$asyncRequests.add(scriptElement);
            }
    }

    function _formElements(form) {
        var elements = [];
        _visitChildNodes(form, function(node) {
            if (_isElement(node)) {
                var tagName = node.tagName.toLowerCase();
                if (tagName == 'input' || tagName == 'select' || tagName == 'button' || tagName == 'textarea' || tagName == 'fieldset') elements.push(node);
            }
        });
        return _wrapInList(elements, HTMLCollection, Object.create(HTMLElement));
    }

    function _selectOptions(select) {
        var options = [];
        _visitChildNodes(select, function(node) {
            var tagName = node.tagName.toLowerCase();
            if (tagName == 'option') options.push(node); 
            else if (tagName != 'optgroup') return false; 
        });
        return _wrapInList(options, HTMLCollection, _createElementByTagName('option'));
    }

    var queryIdSelectorRegEx = /^\s*#([^<>\s]+)\s*$/;
    function _queryIdSelector(selectors, returnFirstElementOnly) {
        var results = [];
        if (typeof selectors === 'string') {
            var parts = selectors.split(',');
            for (var i = 0; i < parts.length; i++) {
                var m = queryIdSelectorRegEx.exec(parts[i]);
                if (m && m[1]) {
                    var e = _lookupElement(m[1]);
                    if (e) {
                        if (returnFirstElementOnly) return e;
                        results.push(e);
                    }
                }
            }
        }
        if (!returnFirstElementOnly)
            return results;
    }

    function _querySelectorAll(obj, selectors) {
        var results = _queryIdSelector(selectors);
        if (results.length === 0)
            results = [Object.create(_getElementByTagName(selectors) || HTMLElement)];
        return _wrapInList(results, NodeList);
    }

    function _querySelector(obj, selectors) {
        var results = _queryIdSelector(selectors, true);
        if (!result)
            result = _$getTrackingNull(Object.create(_getElementByTagName(selectors) || HTMLElement));
        return results;
    }

    function _extend(obj, original, filter) {
        if (obj && original) {
            var propertyNames = Object.getOwnPropertyNames(original);
            if (propertyNames && propertyNames.length > 0) {
                for (var p in propertyNames) {
                    var name = propertyNames[p];
                    if (typeof name != 'string' || (filter && name.match(filter))) continue;
                    Object.defineProperty(obj, name, Object.getOwnPropertyDescriptor(original, name));
                }
            }
        }
    }


    function _getConstructorFromString(type) {
        if (typeof type !== "string") {
            return;
        }

        var typeParts = type.split(".");
        var ctor = _$globalObject;
        var i;
        for (i = 0; i < typeParts.length && ctor; i++) {
            ctor = ctor[typeParts[i]];
        }

        if (typeof ctor === "function") {
            return ctor;
        }
    }

    function _recordChildren(parent, elementDefinitions, parentForm) {
        if (_isElement(parent) && elementDefinitions && elementDefinitions.length > 0) {
            for (var i = 0 ; i < elementDefinitions.length; i++) {
                var e = elementDefinitions[i];
                if (e) {
                    var element = _createElementByTagName(e.$tag);

                    // Insert in global lists
                    if (typeof e.id == 'string') {
                        _recordElementId(e.id, element);
                        // Simulate IE behaviour by exposing the element on the parent using its id
                        if (parentForm && e.$formElement)
                            parentForm[e.id] = element;
                        else 
                            window[e.id] = element;
                    }

                    if (_isAsyncScript(element))
                        _defaultScripts.push(element);

                    // Initialize children
                    if (e.$children)
                        _recordChildren(element, e.$children, e.$tag.toLowerCase() == 'form' ? element : parentForm);

                    // Copy properties
                    _extend(element, e, /(^[\$].+)|(^_\$fieldDoc\$\$.+)/);

                    if (e.$object) {
                        _extend(element, e.$object);
                    }

                    // Add winControl property if there is a data-win-control attribute
                    if (typeof e["data-win-control"] === "string") {
                        var winControlType = e["data-win-control"];
                        element.winControl = _$initVar(undefined, {
                            ctor: _getConstructorFromString(winControlType),
                            type: winControlType,
                            isUnsafeType: true
                        });
                    }

                    _appendChildInternal(parent, element);
                }
            }
        }
    }

    function _recordDomStructure(elementDefinitions) {
        if (elementDefinitions && elementDefinitions.length > 0) {
            _clearElement(document.body);
            _clearElement(document.head);
            _defaultScripts = [];

            for (var i = 0 ; i < elementDefinitions.length; i++) {
                var e = elementDefinitions[i];
                if (e && e.$tag && e.$children) {
                    if (e.$tag == 'body')
                        _recordChildren(document.body, e.$children);
                    else if (e.$tag == 'head')
                        _recordChildren(document.head, e.$children);
                }
            }
        }
    }

    function _createIDBRequest(requestType, source, result){
        var request = Object.create(requestType);
        request.source = source;
        request.result = result;
        return request; 
    }

    <@ XMLContents @>

    // Assign variables to emulate browser host
    Document._$createDomObject = _createDomObject;
    Document._$recordDomStructure = _recordDomStructure;
    this.window = Window;
    _$nonRemovable(this.window);
    document = Document;
    _publicObject('document', Document);
    document.nodeName = '#document';
    document.localName = _$getTrackingNull('');
    document.nodeType = Node.DOCUMENT_NODE;
    document.ownerDocument = _$getTrackingNull(document);
    document.parentNode = _$getTrackingNull(document);
    document.previousSibling = _$getTrackingNull(document);
    document.nextSibling = _$getTrackingNull(document);
    document.nodeValue = _$getTrackingNull('');
    document.defaultView = window;

    document.head = _createElementByTagName('head');
    document.body = document.activeElement = _createElementByTagName('body');
    document.documentElement = _createElementByTagName('html');
    _appendChildInternal(document.documentElement, document.head);
    _appendChildInternal(document.documentElement, document.body);
    _appendChildInternal(document, document.documentElement);
    _appendChildInternal(document.head, _createElementByTagName('title'));
    _appendChildInternal(document.head, _createElementByTagName('script'));

    window.navigator.userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; MS-RTC LM 8; InfoPath.3; Override:IE9_DEFAULT_20091014';
    window.location.href = 'about:blank';
    window.location.pathname = '/blank';
    window.location.protocol = 'about:';
    window.location.toString = function() { return this.href; };

    /* Wire all elements to have the body as their parent node */
    Node.parentNode = document.body;
    Node.ownerDocument = document;

    function _publicInterface(name, interface, interfacePrototype) {
        _$nonRemovable(interface);
        <@ GlobalPolluter @>[name] = interface;
        <@ GlobalPolluter @>[name].prototype = interfacePrototype;
    }

    function _publicObject(name, obj) {
        _$nonRemovable(obj);
        <@ GlobalPolluter @>[name] = obj;
    }
    <@ Public Interfaces @>


    function HTMLOptionElementFactory (text, value, defaultSelected, selected) {
        /// <signature>
        /// <param name='text' type='String' optional='true' />
        /// <param name='value' type='String' optional='true' />
        /// <param name='defaultSelected' type='Boolean' optional='true' />
        /// <param name='selected' type='Boolean' optional='true' />
        /// </signature>
        return Object.create(HTMLOptionElement);
    }

    function HTMLImageElementFactory(width, height) {
        /// <signature>
        /// <param name='width' type='Number' optional='true' />
        /// <param name='height' type='Number' optional='true' />
        /// </signature>
        return Object.create(HTMLImageElement);
    }

    function HTMLAudioElementFactory(src) {
        /// <signature>
        /// <param name='src' type='String' optional='true' />
        /// </signature>
        return Object.create(HTMLAudioElement);
    }
    
    _publicInterface('Option', HTMLOptionElementFactory, HTMLOptionElement);
    _publicInterface('Image', HTMLImageElementFactory, HTMLImageElement);
    _publicInterface('Audio', HTMLAudioElementFactory, HTMLAudioElement);
    
    intellisense.annotate(window, {
        Worker: function() {
            /// <signature>
            /// <param name='stringUrl' type='String' />
            /// </signature>
        },
        MSCSSMatrix: function () {
            /// <signature>
            /// <param name='text' type='String' optional='true' />
            /// </signature>
        },
        WebSocket: function() {
            /// <signature>
            /// <param name='url' type='String' />
            /// <param name='protocols' type='String' optional='true' />
            /// </signature>
            /// <signature>
            /// <param name='url' type='String' />
            /// <param name='protocols' type='Array' elementType='String' optional='true' />
            /// </signature>
        }
    });    

    window.Option.create = window.Option;
    window.Image.create = window.Image;
    window.XDomainRequest.create = window.XDomainRequest;
    window.XMLHttpRequest.create = window.XMLHttpRequest;

})();

function _$getActiveXObject(className, location) {
    if ((/XMLHTTP/i).test(className))
        return new window.XMLHttpRequest();
}
