declare module "@webref/idl" {
  interface IDLFile {
    text(): Promise<string>;
  }
  function listAll(): Promise<Record<string, IDLFile>>;
}
