function TrimEnd(str = "") {
  return str.slice(0, str.length - 1);
}

module.exports.trimEnd = TrimEnd;