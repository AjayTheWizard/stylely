function ParseSquareBrackets(raw = "") {
  let parsedString = "";
  const firstIndex = raw.indexOf("[") + 1;
  const lastIndex = raw.indexOf("]");
  parsedString = raw.slice(firstIndex, lastIndex);
  return parsedString;
}
module.exports.ParseSquareBrackets = ParseSquareBrackets;
