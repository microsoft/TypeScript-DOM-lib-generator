registerProcessor(
  "test",
  class extends AudioWorkletProcessor {
    process(input: Float32Array[][], output: Float32Array[][], params: { [key: string]: Float32Array }) {
      return true;
    }
  }
);
