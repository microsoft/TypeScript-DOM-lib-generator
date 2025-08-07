import * as Browser from "./types.js";
import {
  CompatStatement,
  SimpleSupportStatement,
  SupportBlock,
} from "@mdn/browser-compat-data/types";
import { forceKeepAlive } from "./bcd/keep-alive.js";
import { mapToBcdCompat } from "./bcd/mapper.js";
import { hasStableImplementation } from "./bcd/stable.js";

function hasMultipleImplementations(support: SupportBlock, prefix?: string) {
  const hasStableImpl = (
    browser: SimpleSupportStatement | SimpleSupportStatement[] | undefined,
  ) => hasStableImplementation(browser, prefix);
  let count = 0;
  if (hasStableImpl(support.chrome) || hasStableImpl(support.chrome_android)) {
    count += 1;
  }
  if (
    hasStableImpl(support.firefox) ||
    hasStableImpl(support.firefox_android)
  ) {
    count += 1;
  }
  if (hasStableImpl(support.safari) || hasStableImpl(support.safari_ios)) {
    count += 1;
  }
  return count >= 2;
}

function isSuitable(
  key: string,
  compat?: CompatStatement,
  parentKey?: string,
  prefix?: string,
) {
  const forceAlive = parentKey
    ? forceKeepAlive[parentKey]?.includes(key)
    : !!forceKeepAlive[key];
  if (compat && hasMultipleImplementations(compat.support, prefix)) {
    if (forceAlive) {
      if (parentKey) {
        console.warn(`Redundant forceKeepAlive item: ${parentKey}#${key}`);
      } else if (!forceKeepAlive[key].length) {
        console.warn(`Redundant forceKeepAlive item: ${key}`);
      }
    }
    return true;
  }
  return forceAlive;
}

export function getRemovalData(webidl: Browser.WebIdl): Browser.WebIdl {
  return mapToBcdCompat(webidl, ({ key, parentKey, compat, mixin }) => {
    // Allow all mixins here, but not their members.
    // Empty mixins created by this will be managed by exposed.ts.
    // (It's better to manage mixins there as mixins can also conditionally be empty by exposure settings)
    if (mixin && !parentKey) {
      return;
    }
    if (isSuitable(key, compat, parentKey)) {
      return;
    }
    return { exposed: "" };
  }) as Browser.WebIdl;
}

export function getDeprecationData(webidl: Browser.WebIdl): Browser.WebIdl {
  return mapToBcdCompat(webidl, ({ compat }) => {
    if (compat?.status?.deprecated) {
      return { deprecated: 1 };
    } else if (compat?.status?.preferred_name) {
      return {
        deprecated: `This is a legacy alias of \`${compat.status.preferred_name}\`.`,
      };
    }
  }) as Browser.WebIdl;
}

export function getDocsData(webidl: Browser.WebIdl): Browser.WebIdl {
  return mapToBcdCompat(webidl, ({ compat }) => {
    if (compat?.mdn_url) {
      return { mdnUrl: compat.mdn_url };
    }
  }) as Browser.WebIdl;
}
