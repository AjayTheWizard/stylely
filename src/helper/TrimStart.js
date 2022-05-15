module.exports.TrimStart = (str = "") => {
  let sliceIndex = str.indexOf("-");
  if (sliceIndex) {
    return str.slice(0, sliceIndex + 1);
  }
  return str;
};
