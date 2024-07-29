let merror: MathMLElement | null = document.createElementNS(
  "http://www.w3.org/1998/Math/MathML",
  "merror"
);
merror = document.querySelector("merror");
merror = document.querySelectorAll("merror")[0];
merror = document.body.closest("merror");
merror = document.getElementsByTagName("merror")[0];
merror = document.getElementsByTagNameNS(
  "http://www.w3.org/1998/Math/MathML",
  "merror"
)[0];
