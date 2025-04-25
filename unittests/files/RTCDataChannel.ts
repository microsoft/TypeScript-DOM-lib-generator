function sendIt(
  peerConnection: RTCPeerConnection,
  data: string | Blob | ArrayBuffer | ArrayBufferView,
): void {
    const dc = peerConnection.createDataChannel('');
    dc.onopen = () => {
        dc.send(data);
    };

    dc.onerror = (e) => {
        console.error("DataChannel error:", e);
    };
}


const peerConnection = new RTCPeerConnection();

peerConnection.ondatachannel = (event) => {
    const channel = event.channel;
    channel.onmessage = (e) => {
        console.log("Received message:", e.data);
    };
};

// Call `sendIt` with a string
sendIt(peerConnection, "Hello world!");

// Call `sendIt` with a Blob
const blob = new Blob(["Blob message!"], { type: "text/plain" });
sendIt(peerConnection, blob);

// Call `sendIt` with an ArrayBuffer
const arrayBuffer = new TextEncoder().encode("ArrayBuffer message!").buffer;
sendIt(peerConnection, arrayBuffer);

// Call `sendIt` with an ArrayBufferView
const view = new Uint8Array([72, 105, 33]); // "Hi!"
sendIt(peerConnection, view);
