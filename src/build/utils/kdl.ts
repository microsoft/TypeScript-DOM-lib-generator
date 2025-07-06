import { parse } from "kdljs";
import { Enum, Event, Method, Property } from "../types";

export interface MethodDescriptor {
  [x: string]: Omit<Method, "signature">;
}

export interface EnumDescriptor {
  [x: string]: Enum;
}
export interface PropertyDescriptor {
  [x: string]: Omit<Property, "type">;
}

export interface InterfaceMixin {
  [x: string]: {
    events?: { event: Event[] };
    methods?: { method: MethodDescriptor };
  };
}

/**
 * Converts KDL text describing interface-mixins into JSON format.
 * Uses kdljs v3.
 */
export function parseKDL(kdlText: string) {
  const { output, errors } = parse(kdlText);

  if (errors.length) {
    throw new Error(
      `KDL parse errors:\n${errors.map((e) => e.message).join("\n")}`,
    );
  }

  const nodes = output!;
  const enums: EnumDescriptor = {};
  const interfaces: InterfaceMixin = {};

  for (const node of nodes) {
    if (node.name === "enum") {
      // Handle enum
      const enumName = node.values?.[0]?.toString() ?? "";
      const values: string[] = [];

      for (const child of node.children ?? []) {
        if (
          child.name === "value" &&
          child.values &&
          child.values[0] !== undefined
        ) {
          values.push(child.values[0]!.toString());
        }
      }

      enums[enumName] = { name: enumName, value: values };
    } else {
      // Handle interface-mixin
      const name = node.values?.[0]?.toString() ?? "";
      const iface: {
        events?: { event: Event[] };
        methods?: { method: MethodDescriptor };
        properties?: { property: PropertyDescriptor };
      } = {};

      const events: Event[] = [];
      const methods: MethodDescriptor = {};
      const properties: PropertyDescriptor = {};

      for (const child of node.children ?? []) {
        const name = child.values?.[0]?.toString() ?? "";
        if (child.name === "event") {
          events.push({
            name,
            type: child.properties?.type?.toString() ?? "",
          });
        } else if (child.name === "method") {
          methods[name] = {
            name,
            overrideSignatures: [
              child.properties?.overrideSignatures?.toString() ?? "",
            ],
          };
        } else if (child.name === "property") {
          properties[name] = {
            name,
            exposed: child.properties?.exposed?.toString(),
          };
        }
      }

      if (events.length) iface.events = { event: events };
      if (Object.keys(methods).length) iface.methods = { method: methods };
      if (Object.keys(properties).length)
        iface.properties = { property: properties };

      interfaces[name] = iface;
    }
  }

  return { mixins: { mixin: interfaces }, enums: { enum: enums } };
}
