(function () {
    var _eventManager = _$createEventManager(
        function getEventObject(type, attach, obj, ignoreCase) {
            function _eventTypeToObject(type, attach) {
                if (attach) return Event;
                <@ EventTypeToObjSwitchStatements @>
                return Event;
            }
            var e = _eventTypeToObject(type, attach);
            var eventObject = Object.create(e);
            eventObject.target = obj;
            eventObject.currentTarget = obj;
            eventObject.type = type;
            if (eventObject.relatedTarget)
                eventObject.relatedTarget = obj;
            return eventObject;
        });
    var _events = _eventManager.createEventProperties;

    <@ XMLContents @>

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

    this.XMLHttpRequest.create = this.XMLHttpRequest;
})();

function _$getActiveXObject(className, location) {
    if ((/XMLHTTP/i).test(className))
        return new window.XMLHttpRequest();
}
