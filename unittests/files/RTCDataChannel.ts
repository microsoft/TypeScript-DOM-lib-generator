function sendIt (peerConnection: RTCPeerConnection, data: ArrayBufferView | string): void {
    const dc = peerConnection.createDataChannel('')
  
    if (typeof data === 'string') {
      dc.send(data)
    } else {
      dc.send(data)
    }
  }