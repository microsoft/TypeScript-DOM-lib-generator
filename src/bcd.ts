import * as Browser from "./types";
import bcd from "@mdn/browser-compat-data";
import { Identifier, SimpleSupportStatement, SupportBlock } from "@mdn/browser-compat-data/types";

const forceKeepAlive: Record<string, string[]> = {
  // Things that are incorrectly reported as unsupported.
  // These should be filed to https://github.com/mdn/browser-compat-data/issues
  "Animation": ["finished", "pending", "ready", "updatePlaybackRate"],
  "AnimationPlaybackEvent": ["currentTime", "timelineTime"],
  "ByteLengthQueuingStrategy": ["size"],
  "ConstantSourceNode": ["offset"],
  "CountQueuingStrategy": ["size"],
  "ExtendableMessageEvent": ["lastEventId", "origin", "ports", "source"],
  "GlobalEventHandlers": [
    "onabort",
    "oncancel", // Blink only as of Sep 2020
    "ontouchcancel",
    "ontouchend",
    "ontouchmove",
    "ontouchstart"
  ],
  "HTMLIFrameElement": ["allowPaymentRequest"],
  "KeyframeEffect": [
    "composite",
    "iterationComposite", // Gecko only as of Sep 2020
    "getKeyframes",
    "setKeyframes",
  ],
  "MediaSource": ["clearLiveSeekableRange", "setLiveSeekableRange"],
  "NavigatorPlugins": ["javaEnabled", "mimeTypes", "plugins"],
  "SharedWorkerGlobalScope": ["close"],
  "ServiceWorkerGlobalScope": ["onmessageerror"],
  "TextTrackCue": ["endTime", "id", "pauseOnExit", "startTime", "track"],
  "TrackEvent": ["track"],
  "WebKitCSSMatrix": [],
  "WindowEventHandlers": ["onmessage"],

  // Widely supported but without being correctly exposed to global
  "ReadableStreamDefaultReader": ["closed", "cancel", "read", "releaseLock"],
  "ReadableStreamDefaultController": ["desiredSize", "close", "enqueue", "error"],

  // Things that indeed are not widely supported enough
  // but they already have been in lib.d.ts for a while
  "AbstractRange": ["collapsed", "endContainer", "endOffset", "startContainer", "startOffset"],
  "AudioContext": ["outputLatency", "createMediaStreamTrackSource"],
  "AudioListener": [
    "forwardX",
    "forwardY",
    "forwardZ",
    "positionX",
    "positionY",
    "positionZ",
    "upX",
    "upY",
    "upZ",
  ],
  "AudioParam": ["automationRate", "cancelAndHoldAtTime"],
  "CaretPosition": [],
  "ClipboardItem": [],
  "DOMError": ["name"],
  "FederatedCredential": [],
  "FetchEvent": ["preloadResponse"],
  "Gamepad": [
    "hand",
    "pose",
    "hapticActuators", // widely supported
  ],
  "GamepadHapticActuator": [
    "type", // widely supported
    "pulse",
  ],
  "GamepadPose": [
    "angularAcceleration",
    "angularVelocity",
    "hasOrientation",
    "hasPosition",
    "linearAcceleration",
    "linearVelocity",
    "orientation",
    "position",
  ],
  "HTMLElement": ["autocapitalize"],
  "HTMLCanvasElement": ["transferControlToOffscreen"],
  "HTMLDialogElement": ["open", "returnValue", "close", "show", "showModal"],
  "InputDeviceInfo": ["getCapabilities"],
  "ResizeObserverSize": ["blockSize", "inlineSize"],
  "Request": ["keepalive"],
  "RTCDtlsTransport": [
    "getRemoteCertificates",
    "iceTransport",
    "onerror",
    "onstatechange",
    "state",
  ],
  "RTCError": [],
  "RTCErrorEvent": ["error"],
  "RTCIceCandidate": [
    "component",
    "foundation",
    "port",
    "priority",
    "protocol",
    "relatedAddress",
    "relatedPort",
    "tcpType",
    "type",
  ],
  "RTCIceTransport": [
    "gatheringState",
    "getLocalCandidates",
    "getLocalParameters",
    "getRemoteCandidates",
    "getRemoteParameters",
    "getSelectedCandidatePair",
    "ongatheringstatechange",
    "onselectedcandidatepairchange",
    "onstatechange",
    "role",
    "state",
  ],
  "RTCIdentityAssertion": ["idp", "name"],
  "RTCPeerConnection": [
    "canTrickleIceCandidates", // widely supported
    "getIdentityAssertion",
    "onicecandidateerror",
    "peerIdentity",
    "setIdentityProvider",
    "sctp",
  ],
  "RTCPeerConnectionIceErrorEvent": ["errorCode", "errorText", "hostCandidate", "url"],
  "RTCRtpSender": ["rtcpTransport", "transport"],
  "RTCRtpTransceiver": ["setCodecPreferences"],
  "RTCSctpTransport": [
    "maxChannels",
    "maxMessageSize",
    "onstatechange",
    "state",
    "transport",
  ],
  "RTCStatsReport": [],
  "MediaStreamTrackAudioSourceNode": [],
  "NavigationPreloadManager": ["disable", "enable", "getState", "setHeaderValue"],
  "Notification": [
    "actions",
    "badge",
    "image",
    "maxActions",
    "renotify",
    "requireInteraction",
    "silent",
    "timestamp",
    "vibrate",
  ],
  "OfflineAudioContext": [
    "resume", // widely supported
    "suspend",
  ],
  "OffscreenCanvas": [
    "convertToBlob",
    "getContext",
    "height",
    "transferToImageBitmap",
    "width",
  ],
  "PasswordCredential": [],
  "PushSubscription": ["expirationTime"],
  "PushSubscriptionOptions" : ["userVisibleOnly"],
  "ServiceWorkerRegistration": ["sync"],
  "SpeechGrammar": ["src", "weight"],
  "SpeechGrammarList": ["addFromString", "addFromURI", "item", "length"],
  "SpeechRecognition": [
    "abort",
    "continuous",
    "grammars",
    "interimResults",
    "lang",
    "maxAlternatives",
    "onaudioend",
    "onaudiostart",
    "onend",
    "onerror",
    "onnomatch",
    "onresult",
    "onsoundend",
    "onsoundstart",
    "onspeechend",
    "onspeechstart",
    "onstart",
    "start",
    "stop",
  ],
  "SpeechRecognitionAlternative": ["confidence", "transcript"],
  "SpeechRecognitionErrorEvent": ["error", "message"],
  "SpeechRecognitionEvent": ["resultIndex", "results"],
  "SpeechRecognitionResult": ["item", "length", "isFinal"],
  "SpeechRecognitionResultList": ["item", "length"],
  "SyncManager": ["getTags", "register"],
  "SyncEvent": ["lastChance", "tag"],
  "TextDecoderStream": [],
  "TextEncoderStream": [],
  "TransformStream": ["readable", "writable"],
  "TransformStreamDefaultController": ["desiredSize", "enqueue", "error", "terminate"],
  "VRDisplay": [
    "cancelAnimationFrame",
    "capabilities",
    "depthFar",
    "depthNear",
    "displayId",
    "displayName",
    "exitPresent",
    "getEyeParameters",
    "getFrameData",
    "getLayers",
    "getPose",
    "isConnected",
    "isPresenting",
    "requestAnimationFrame",
    "requestPresent",
    "resetPose",
    "stageParameters",
    "submitFrame",
  ],
  "VRDisplayCapabilities": [
    "canPresent",
    "hasExternalDisplay",
    "hasOrientation",
    "hasPosition",
    "maxLayers",
  ],
  "VRDisplayEvent": ["display", "reason"],
  "VREyeParameters": [
    "fieldOfView",
    "offset",
    "renderHeight",
    "renderWidth",
  ],
  "VRFieldOfView": ["downDegrees", "leftDegrees", "rightDegrees", "upDegrees"],
  "VRFrameData": [
    "leftProjectionMatrix",
    "leftViewMatrix",
    "pose",
    "rightProjectionMatrix",
    "rightViewMatrix",
    "timestamp",
  ],
  "VRPose": [
    "angularAcceleration",
    "angularVelocity",
    "linearAcceleration",
    "linearVelocity",
    "orientation",
    "position",
  ],
  "VTTCue": ["lineAlign", "positionAlign", "region"],
  "WebGLVertexArrayObjectOES": [],
  "Window": [
    "ondeviceorientationabsolute",
    "onvrdisplayactivate",
    "onvrdisplayblur",
    "onvrdisplaydeactivate",
    "onvrdisplaypresentchange"
  ],
  "WorkerNavigator": ["permissions"],
  "WritableStream": ["abort", "getWriter", "locked"],
  "WritableStreamDefaultController": ["error"],
  "WritableStreamDefaultWriter": [
    "abort",
    "close",
    "closed",
    "desiredSize",
    "ready",
    "releaseLock",
    "write",
  ],
};

function hasMultipleImplementations(support: SupportBlock) {
  function hasStableImplementation(browser: SimpleSupportStatement | SimpleSupportStatement[] | undefined) {
    if (!browser) {
      return false;
    }
    const latest = Array.isArray(browser) ? browser[0] : browser;
    return latest.version_added && !latest.version_removed && !latest.flags;
  }
  let count = 0;
  if (hasStableImplementation(support.chrome) || hasStableImplementation(support.chrome_android)) {
    count += 1;
  }
  if (hasStableImplementation(support.firefox) || hasStableImplementation(support.firefox_android)) {
    count += 1;
  }
  if (hasStableImplementation(support.safari) || hasStableImplementation(support.safari_ios)) {
    count += 1;
  }
  return count >= 2;
}

function isEmpty(o: object) {
  return !Object.keys(o).length;
}

function isSuitable(key: string, value: Identifier, parentKey?: string) {
  const forceAlive = parentKey ? forceKeepAlive[parentKey]?.includes(key) : !!forceKeepAlive[key];
  if (value.__compat && hasMultipleImplementations(value.__compat.support)) {
    if (forceAlive) {
      if (parentKey) {
        console.warn(`Redundant forceKeepAlive item: ${parentKey}#${key}`)
      } else if (!forceKeepAlive[key].length) {
        console.warn(`Redundant forceKeepAlive item: ${key}`)
      }
    }
    return true;
  }
  return forceAlive;
}

export function getRemovalDataFromBcd(webidl: Browser.WebIdl) {
  function getDefinition(key: string) {
    if (webidl.interfaces!.interface.hasOwnProperty(key)) {
      return {
        type: "interface",
        base: webidl.interfaces!.interface[key]
      };
    } else if (webidl.mixins!.mixin.hasOwnProperty(key)) {
      return {
        type: "mixin",
        base: webidl.mixins!.mixin[key]
      };
    }
  }

  const interfaces: Record<string, object> = {};
  const mixins: Record<string, object> = {};
  for (const [key, value] of Object.entries(bcd.api)) {
    const definition = getDefinition(key);
    if (!definition) {
      continue;
    }
    const { base } = definition
    if (!isSuitable(key, value)) {
      if (definition.type === "interface") {
        interfaces[key] = { exposed: "" };
      }
      continue;
    }

    const methods: Record<string, object> = {};
    const properties: Record<string, object> = {};
    for (const [memberKey, memberValue] of Object.entries(value)) {
      if (!isSuitable(memberKey, memberValue, key)) {
        if (base.methods.method.hasOwnProperty(memberKey)) {
          methods[memberKey] = { exposed: "" };
        } else if (base.properties!.property.hasOwnProperty(memberKey)) {
          properties[memberKey] = { exposed: "" };
        }
      }
    }
    const removalItem: Record<string, object> = {};
    if (!isEmpty(methods)) {
      removalItem.methods = { method: methods };
    }
    if (!isEmpty(properties)) {
      removalItem.properties = { property: properties };
    }
    if (!isEmpty(removalItem)) {
      if (definition.type === "interface") {
        interfaces[key] = removalItem;
      } else {
        mixins[key] = removalItem;
      }
    }
  }
  return { interfaces: { interface: interfaces }, mixins: { mixin: mixins } };
}
