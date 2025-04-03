// Example test for NamedNodeMap
const element = document.createElement("div");
element.setAttribute("data-test", "value");
const namedNodeMap = element.attributes;

// Numeric indexing check
console.log(namedNodeMap.length > 0); // Should be true
console.log(namedNodeMap[0] instanceof Attr); // Should be true

// Accessing attributes by name using getNamedItem
const attr = namedNodeMap.getNamedItem("data-test");
console.log(attr !== null); // Should be true
console.log(attr?.value === "value"); // Should be true

// Checking direct string indexing
try {
  console.log(namedNodeMap["data-test"]); // Should be undefined (will throw type error)
} catch {
  console.log("Direct string indexing is not allowed");
}

// Setting and removing attributes
const newAttr = document.createAttribute("data-new");
newAttr.value = "newValue";
namedNodeMap.setNamedItem(newAttr);
console.log(namedNodeMap.getNamedItem("data-new")?.value === "newValue"); // Should be true

namedNodeMap.removeNamedItem("data-new");
console.log(namedNodeMap.getNamedItem("data-new") === null); // Should be true
