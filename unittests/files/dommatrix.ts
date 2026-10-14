// DOMMatrix constructor accepts typed arrays in all browsers.
// https://github.com/microsoft/TypeScript/issues/60862
new DOMMatrix(new Float32Array(16));
new DOMMatrix(new Float64Array(16));
new DOMMatrixReadOnly(new Float32Array(16));
new DOMMatrixReadOnly(new Float64Array(16));

// Existing overloads keep working.
new DOMMatrix();
new DOMMatrix("matrix(1, 0, 0, 1, 0, 0)");
new DOMMatrix([1, 0, 0, 1, 0, 0]);
