import { parse, type Value, type Node, Document } from "kdljs";
import type {
  Enum,
  Event,
  Property,
  Interface,
  WebIdl,
  Method,
  Typed,
  Param,
  Dictionary,
  Member,
  Signature,
} from "./types.js";
import { readdir, readFile } from "fs/promises";
import { merge } from "./helpers.js";

type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

interface OverridableMethod extends Omit<Method, "signature"> {
  signature: DeepPartial<Signature>[] | Record<number, DeepPartial<Signature>>;
}
interface OverridableDictionary extends Omit<Partial<Dictionary>, "members"> {
  members: {
    member: Record<string, Partial<Member> | null>;
  };
}

/**
 * Class that converts parsed KDL Document nodes to match the [types](types.d.ts).

 */
class KDLConverter {
  node: Node;
  childNode: Node;
  type: "mixin" | "interface" | undefined;
  isRemoval: boolean;
  result: DeepPartial<WebIdl> = {};

  constructor(nodes: Node[], isRemoval = false) {
    const node = {
      name: "",
      values: [],
      properties: {},
      children: [],
      tags: { name: undefined, values: [], properties: {} },
    };
    this.node = node;
    this.childNode = node;
    this.isRemoval = isRemoval;
    this.convertKDLNodes(nodes);
  }

  private optionalMember<T extends "string" | "number" | "boolean">(
    prop: string,
    type: T,
    value?: Value,
  ) {
    if (value === undefined) {
      return {};
    }
    if (typeof value !== type) {
      throw new Error(
        `Expected type ${type} for ${prop}, but got ${typeof value}`,
      );
    }
    return {
      [prop]: value,
    };
  }

  private string(arg: unknown): string {
    if (typeof arg !== "string") {
      throw new Error(`Expected a string but found ${typeof arg}`);
    }
    return arg;
  }

  private handleTyped(type: Node): Typed {
    const isTyped = type.name == "type";
    if (!isTyped) {
      throw new Error("Expected a type node");
    }
    const name = this.string(type.values[0]);
    const subType =
      type.children.length > 0 ? this.handleTyped(type.children[0]) : undefined;
    return {
      type: name,
      subtype: subType,
      ...this.optionalMember("nullable", "boolean", type.properties.nullable),
    };
  }

  private handleTypeParameters(value: Value | Node) {
    if (!value || typeof value === "boolean" || typeof value === "number") {
      return {};
    }
    if (typeof value === "string") {
      return { typeParameters: [{ name: value }] };
    }
    return {
      typeParameters: [
        {
          name: this.string(value.values[0]),
          ...this.optionalMember(
            "default",
            "string",
            this.childNode.properties.default,
          ),
        },
      ],
    };
  }

  private undefinedIfEmpty(object: object, output: object) {
    return Object.entries(object).length ? output : undefined;
  }

  // This method returns the original object if this KDLConverter is not in "removal" mode.
  // If it is in removal mode, it returns undefined (which is ignored on merge), rather than an empty object.
  private additionOnly<T>(obj: T) {
    if (!this.isRemoval) {
      return obj;
    }
    return undefined;
  }

  private convertKDLNodes(nodes: Node[]) {
    const enums: Record<string, Partial<Enum>> = {};
    const mixin: Record<string, DeepPartial<Interface>> = {};
    const interfaces: Record<string, DeepPartial<Interface>> = {};
    const dictionary: Record<string, OverridableDictionary> = {};

    for (const node of nodes) {
      this.node = node;
      // Note: no "removals" handling here; caller is responsible for splitting
      const name = this.string(node.values[0]);
      switch (node.name) {
        case "enum": {
          const enumObj = this.handleEnum();
          enums[name] = enumObj;
          break;
        }
        case "interface-mixin": {
          this.type = "mixin";
          const mixinObj = this.handleMixinAndInterfaces();
          mixin[name] = merge(mixin[name], mixinObj);
          break;
        }
        case "interface": {
          this.type = "interface";
          const ifaceObj = this.handleMixinAndInterfaces();
          interfaces[name] = ifaceObj;
          break;
        }
        case "dictionary": {
          const dictObj = this.handleDictionary();
          dictionary[name] = dictObj;
          break;
        }
        default:
          throw new Error(`Unknown node name: ${node.name}`);
      }
    }

    this.result = {
      enums: this.undefinedIfEmpty(enums, { enum: enums }),
      mixins: this.undefinedIfEmpty(mixin, { mixin }),
      interfaces: this.undefinedIfEmpty(interfaces, { interface: interfaces }),
      dictionaries: this.undefinedIfEmpty(dictionary, { dictionary }),
    };
  }

  /**
   * Handles an enum node (uses this.node).
   */
  private handleEnum(): Partial<Enum> {
    const name = this.string(this.node.properties.name || this.node.values[0]);
    const values: string[] = [];

    for (const child of this.node.children) {
      values.push(child.name);
    }

    return {
      value: values,
      ...this.optionalMember(
        "legacyNamespace",
        "string",
        this.node.properties.legacyNamespace,
      ),
      ...this.additionOnly({ name }),
    };
  }

  /**
   * Handles a mixin or interface node by extracting its name and associated members (uses this.node).
   */
  private handleMixinAndInterfaces(): DeepPartial<Interface> {
    const name = this.string(this.node.properties.name || this.node.values[0]);

    const event: Event[] = [];
    const property: Record<string, Partial<Property>> = {};
    let method: Record<string, DeepPartial<OverridableMethod>> = {};

    for (const child of this.node.children) {
      this.childNode = child;
      switch (child.name) {
        case "event": {
          const eventObj = this.handleEvent();
          event.push(eventObj);
          break;
        }
        case "property": {
          const propName = this.string(child.values[0]);
          const propertyObj = this.handleProperty();
          property[propName] = propertyObj;
          break;
        }
        case "method": {
          const methodName = this.string(child.values[0]);
          const methodObj = this.handleMethod();
          method = merge(method, {
            [methodName]: methodObj,
          });
          break;
        }
        default:
          throw new Error(`Unknown node name: ${child.name}`);
      }
    }

    const interfaceObject = this.type === "interface" && {
      ...this.optionalMember("exposed", "string", this.node.properties.exposed),
      ...this.optionalMember(
        "deprecated",
        "string",
        this.node.properties.deprecated,
      ),
      ...this.optionalMember(
        "noInterfaceObject",
        "boolean",
        this.node.properties.noInterfaceObject,
      ),
    };
    return {
      events: { event },
      properties: { property },
      methods: { method },
      ...this.optionalMember("extends", "string", this.node.properties.extends),
      ...this.optionalMember(
        "overrideThis",
        "string",
        this.node.properties.overrideThis,
      ),
      ...this.optionalMember("forward", "string", this.node.properties.forward),
      ...this.optionalMember(
        "forwardExtends",
        "string",
        this.node.properties.forwardExtends,
      ),
      ...this.optionalMember(
        "replaceReference",
        "string",
        this.node.properties.replaceReference,
      ),
      ...this.handleTypeParameters(this.node.properties.typeParameters),
      ...interfaceObject,
      ...this.additionOnly({ name }),
    } as DeepPartial<Interface>;
  }

  /**
   * Handles a child node of type "event" and adds it to the event array (uses this.node).
   */
  private handleEvent(): Event {
    const child = this.childNode;
    return {
      name: this.string(child.values[0]),
      type: this.string(child.properties.type),
    };
  }

  /**
   * Handles a child node of type "property" and adds it to the property object (uses this.node).
   */
  private handleProperty(): Partial<Property> {
    let typeNode: Node | undefined;
    for (const c of this.childNode.children) {
      if (c.name === "type") {
        typeNode = c;
        break;
      }
    }

    return {
      name: this.string(this.childNode.values[0]),
      ...this.optionalMember(
        "exposed",
        "string",
        this.childNode.properties.exposed,
      ),
      ...this.optionalMember(
        "optional",
        "boolean",
        this.childNode.properties.optional,
      ),
      ...this.optionalMember(
        "overrideType",
        "string",
        this.childNode.properties.overrideType,
      ),
      ...(typeNode
        ? this.handleTyped(typeNode)
        : this.optionalMember(
            "type",
            "string",
            this.childNode.properties.type,
          )),
      ...this.optionalMember(
        "readonly",
        "boolean",
        this.childNode.properties.readonly,
      ),
      ...this.optionalMember(
        "deprecated",
        "boolean",
        this.childNode.properties.deprecated,
      ),
    };
  }

  /**
   * Handles a child node of type "method" and adds it to the method object (uses this.node).
   */
  private handleMethod(): DeepPartial<OverridableMethod> {
    const name = this.string(this.childNode.values[0]);

    let typeNode: Node | undefined;
    const params: Partial<Param>[] = [];

    for (const c of this.childNode.children) {
      switch (c.name) {
        case "type":
          if (typeNode) {
            throw new Error(
              `Method "${name}" has multiple type nodes (invalid)`,
            );
          }
          typeNode = c;
          break;

        case "param":
          params.push({
            name: this.string(c.values[0]),
            ...this.optionalMember("type", "string", c.properties.type),
            ...this.optionalMember(
              "overrideType",
              "string",
              c.properties.overrideType,
            ),
          });
          break;

        default:
          throw new Error(`Unexpected child "${c.name}" in method "${name}"`);
      }
    }

    // Determine the actual signature object
    const signatureObj: DeepPartial<Signature> = {
      param: params,
      ...(typeNode
        ? this.handleTyped(typeNode)
        : {
            type: this.string(this.childNode.properties.returns),
            subtype: undefined,
          }),
    };

    let signature: OverridableMethod["signature"];
    const signatureIndex = this.childNode.properties.signatureIndex;
    if (typeof signatureIndex == "number") {
      signature = { [signatureIndex]: signatureObj };
    } else {
      signature = [signatureObj];
    }
    return { signature, ...this.additionOnly({ name }) };
  }

  /**
   * Handles dictionary nodes (uses this.node).
   */
  private handleDictionary(): OverridableDictionary {
    const name = this.string(this.node.values[0]);
    const member: Record<string, Partial<Member> | null> = {};
    let typeParameters = {};

    for (const c of this.node.children) {
      this.childNode = c;
      switch (c.name) {
        case "member": {
          const memberName = this.string(c.values[0]);
          const memberObj = this.handleMember();
          member[memberName] = memberObj;
          break;
        }
        case "typeParameters": {
          typeParameters = this.handleTypeParameters(c);
          break;
        }
        default:
          throw new Error(`Unknown node name: ${c.name}`);
      }
    }

    return {
      members: { member },
      ...typeParameters,
      ...this.handleTypeParameters(this.node.properties.typeParameters),
      ...this.optionalMember(
        "legacyNamespace",
        "string",
        this.node.properties.legacyNamespace,
      ),
      ...this.optionalMember(
        "overrideType",
        "string",
        this.node.properties.overrideType,
      ),
      ...this.additionOnly({ name }),
    };
  }

  /**
   * Handles dictionary member nodes (uses this.node).
   */
  private handleMember(): Partial<Member> | null {
    if (this.isRemoval) {
      return null;
    }
    const name = this.string(this.childNode.values[0]);
    return {
      ...this.additionOnly({ name }),
      ...this.optionalMember("type", "string", this.childNode.properties.type),
      ...this.optionalMember(
        "required",
        "boolean",
        this.childNode.properties.required,
      ),
      ...this.optionalMember(
        "deprecated",
        "boolean",
        this.childNode.properties.deprecated,
      ),
      ...this.optionalMember(
        "overrideType",
        "string",
        this.childNode.properties.overrideType,
      ),
    };
  }
}

/**
 * Collect all file URLs in a directory.
 */
async function getAllFileURLs(folder: URL): Promise<URL[]> {
  const entries = await readdir(folder, { withFileTypes: true });
  return entries.map((entry) => new URL(entry.name, folder));
}

/**
 * Read and parse a single KDL file into its KDL Document structure.
 */
async function readPatchDocument(fileUrl: URL): Promise<Document> {
  const text = await readFile(fileUrl, "utf8");
  const { output, errors } = parse(text);
  if (errors.length) {
    throw new Error(`KDL parse errors in ${fileUrl.toString()}`, {
      cause: errors,
    });
  }
  return output!;
}

/**
 * Read, parse, and merge all KDL files under the input folder.
 * Splits the main patch content and the removals from each file for combined processing.
 *
 * Returns:
 *   {
 *     patches: merged patch contents (excluding removals),
 *     removalPatches: merged removals, with names stripped
 *   }
 */
export default async function readPatches(): Promise<{
  patches: any;
  removalPatches: any;
}> {
  const patchDirectory = new URL("../../inputfiles/patches/", import.meta.url);
  const fileUrls = await getAllFileURLs(patchDirectory);

  // Stage 1: Parse all file KDLs into Documents
  const documents = await Promise.all(fileUrls.map(readPatchDocument));

  // Stage 2: Group by patches or removals
  const merged = documents.flat();
  const patchNodes = merged.filter((node) => node.name !== "removals");
  const removalNodes = merged
    .filter((node) => node.name === "removals")
    .map((node) => node.children)
    .flat();

  // Stage 3: Convert the nodes for patches and removals respectively
  const patches = new KDLConverter(patchNodes).result;
  const removalPatches = new KDLConverter(removalNodes, true).result;

  return { patches, removalPatches };
}
