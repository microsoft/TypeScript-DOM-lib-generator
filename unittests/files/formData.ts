const formData = new FormData();

// Should work
formData.append("myProp", "value");

// Should work
formData.append("myProp", new Blob());

// Should work
formData.append("myProp", new Blob(), "myFile");

// @ts-expect-error will error on runtime
formData.append("myProp", "value", "myFile");

// Should work
formData.set("myProp", "value");

// Should work
formData.set("myProp", new Blob());

// Should work
formData.set("myProp", new Blob(), "myFile");

// @ts-expect-error will error on runtime
formData.set("myProp", "value", "myFile");

// Should work for union type
type stringBlobUnion = string | Blob;
const unionValue = "value" as stringBlobUnion;

formData.set("myProp", unionValue);
formData.append("myProp", unionValue);
