function ClearEmpty(node) {
  const { type } = node;
  const sub = node.nodes;
  if (
    (type === "decl" && !node.value && !node.prop.startsWith("--")) ||
    (type === "rule" && !node.selector) ||
    (sub && !sub.length) ||
    (type === "atrule" &&
      ((!sub && !node.params) || (!node.params && !sub.length))) ||
    !node.nodes
  ) {
    node.remove();
  }
}

module.exports.ClearEmpty = ClearEmpty;
