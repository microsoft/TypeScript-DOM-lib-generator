switch (document.body.ariaAtomic) {
  case "true":
  case "false":
  case null:
    break;
  default:
    document.body.ariaAtomic satisfies never;
}

switch (document.body.ariaAutoComplete) {
  case "both":
  case "inline":
  case "list":
  case "none":
  case null:
    break;
  default:
    document.body.ariaAutoComplete satisfies never;
}

document.body.ariaBrailleLabel = "abc";
document.body.ariaBrailleLabel = null;

document.body.ariaBrailleRoleDescription = "abc";
document.body.ariaBrailleRoleDescription = null;

switch (document.body.ariaBusy) {
  case "true":
  case "false":
  case null:
    break;
  default:
    document.body.ariaBusy satisfies never;
}

switch (document.body.ariaChecked) {
  case "true":
  case "mixed":
  case "false":
  case "undefined":
  case null:
    break;
  default:
    document.body.ariaChecked satisfies never;
}

document.body.ariaColCount = "1";
document.body.ariaColCount = null;
/// @ts-expect-error does not accept float type
document.body.ariaColCount = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaColCount = "";

document.body.ariaColIndex = "1";
document.body.ariaColIndex = null;
/// @ts-expect-error does not accept float type
document.body.ariaColIndex = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaColIndex = "";

document.body.ariaColIndexText = "abc";
document.body.ariaColCount = null;

document.body.ariaColSpan = "1";
document.body.ariaColSpan = null;
/// @ts-expect-error does not accept float type
document.body.ariaColSpan = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaColSpan = "";

switch (document.body.ariaCurrent) {
  case "true":
  case "false":
  case "date":
  case "location":
  case "page":
  case "step":
  case "time":
  case null:
    break;
  default:
    document.body.ariaCurrent satisfies never;
}

document.body.ariaDescription = "abc";
document.body.ariaDescription = null;

switch (document.body.ariaDisabled) {
  case "true":
  case "false":
  case null:
    break;
  default:
    document.body.ariaDisabled satisfies never;
}

switch (document.body.ariaExpanded) {
  case "true":
  case "false":
  case "undefined":
  case null:
    break;
  default:
    document.body.ariaExpanded satisfies never;
}

switch (document.body.ariaHasPopup) {
  case "true":
  case "false":
  case "dialog":
  case "grid":
  case "listbox":
  case "menu":
  case "tree":
  case null:
    break;
  default:
    document.body.ariaHasPopup satisfies never;
}

switch (document.body.ariaHidden) {
  case "true":
  case "false":
  case "undefined":
  case null:
    break;
  default:
    document.body.ariaHidden satisfies never;
}

switch (document.body.ariaInvalid) {
  case "true":
  case "false":
  case "grammar":
  case "spelling":
  case null:
    break;
  default:
    document.body.ariaInvalid satisfies never;
}

document.body.ariaKeyShortcuts = "Alt+Enter";
document.body.ariaKeyShortcuts = null;

document.body.ariaLabel = "abc";
document.body.ariaLabel = null;

document.body.ariaLevel = "1";
document.body.ariaLevel = null;
/// @ts-expect-error does not accept float type
document.body.ariaLevel = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaLevel = "";

switch (document.body.ariaLive) {
  case "assertive":
  case "off":
  case "polite":
  case null:
    break;
  default:
    document.body.ariaLive satisfies never;
}

switch (document.body.ariaModal) {
  case "true":
  case "false":
  case null:
    break;
  default:
    document.body.ariaModal satisfies never;
}

switch (document.body.ariaMultiLine) {
  case "true":
  case "false":
  case null:
    break;
  default:
    document.body.ariaMultiLine satisfies never;
}

switch (document.body.ariaMultiSelectable) {
  case "true":
  case "false":
  case null:
    break;
  default:
    document.body.ariaMultiSelectable satisfies never;
}

switch (document.body.ariaOrientation) {
  case "horizontal":
  case "undefined":
  case "vertical":
  case null:
    break;
  default:
    document.body.ariaOrientation satisfies never;
}

document.body.ariaPlaceholder = "abc";
document.body.ariaPlaceholder = null;

document.body.ariaPosInSet = "1";
document.body.ariaPosInSet = null;
/// @ts-expect-error does not accept float type
document.body.ariaPosInSet = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaPosInSet = "";

switch (document.body.ariaPressed) {
  case "false":
  case "mixed":
  case "true":
  case "undefined":
  case null:
    break;
  default:
    document.body.ariaPressed satisfies never;
}

switch (document.body.ariaReadOnly) {
  case "false":
  case "true":
  case null:
    break;
  default:
    document.body.ariaReadOnly satisfies never;
}

switch (document.body.ariaRequired) {
  case "false":
  case "true":
  case null:
    break;
  default:
    document.body.ariaRequired satisfies never;
}

document.body.ariaRoleDescription = "abc";
document.body.ariaRoleDescription = null;

document.body.ariaRowCount = "1";
document.body.ariaRowCount = null;
/// @ts-expect-error does not accept float type
document.body.ariaRowCount = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaRowCount = "";

document.body.ariaRowIndex = "1";
document.body.ariaRowIndex = null;
/// @ts-expect-error does not accept float type
document.body.ariaRowIndex = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaRowIndex = "";

document.body.ariaRowIndexText = "abc";
document.body.ariaRowIndexText = null;

document.body.ariaRowSpan = "1";
document.body.ariaRowSpan = null;
/// @ts-expect-error does not accept float type
document.body.ariaRowSpan = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaRowSpan = "";

switch (document.body.ariaSelected) {
  case "true":
  case "false":
  case "undefined":
  case null:
    break;
  default:
    document.body.ariaSelected satisfies never;
}

document.body.ariaSetSize = "1";
document.body.ariaSetSize = null;
/// @ts-expect-error does not accept float type
document.body.ariaSetSize = "1.1";
/// @ts-expect-error does not accept empty string
document.body.ariaSetSize = "";

switch (document.body.ariaSort) {
  case "ascending":
  case "descending":
  case "none":
  case "other":
  case null:
    break;
  default:
    document.body.ariaSort satisfies never;
}

document.body.ariaValueMax = "1";
document.body.ariaValueMax = "1.1";
document.body.ariaValueMax = null;
/// @ts-expect-error does not accept empty string
document.body.ariaValueMax = "";

document.body.ariaValueMin = "1";
document.body.ariaValueMin = "1.1";
document.body.ariaValueMin = null;
/// @ts-expect-error does not accept empty string
document.body.ariaValueMin = "";

document.body.ariaValueNow = "1";
document.body.ariaValueNow = "1.1";
document.body.ariaValueNow = null;
/// @ts-expect-error does not accept empty string
document.body.ariaValueNow = "";

document.body.ariaValueText = "abc";
document.body.ariaValueText = null;
