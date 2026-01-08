declare module "@webref/css" {
  interface Property {
    name: string;
  }
  interface Data {
    properties: Property[];
  }
  function listAll(): Promise<Data>;
}
