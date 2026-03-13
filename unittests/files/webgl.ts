function assertType<T>(_x: T) {}

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl")!;

const ext_ANGLE_instanced_arrays = gl.getExtension("ANGLE_instanced_arrays");
// TypeScript should infer: ANGLE_instanced_arrays | null
assertType<ANGLE_instanced_arrays | null>(ext_ANGLE_instanced_arrays);
