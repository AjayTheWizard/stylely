function SelectorDecl(selector = "", decl, bla = "") {
  const newSelector = decl.parent.selector + bla;
  let newNode = decl.parent.parent.append({
    selector: newSelector,
  });
  //* Length of String to Trim from Decl.Prop
  const len = selector.length;
  //* Var Checks whether it's running first time
  let count = 0;
  newNode.nodes.map((node) => {
    if (node.selector === newSelector && count === 0) {
      count++;
      node.append({ prop: decl.prop.slice(len), value: decl.value });
    }
  });
  decl.remove();
}

module.exports.selectorDecl = SelectorDecl;
