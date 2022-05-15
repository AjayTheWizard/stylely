const { default: postcss } = require("postcss");

function SelectorAtRule(breakpoint = "", decl, replacedBreakPoints = "") {
  const newRule = decl.parent.parent.append(
    postcss.atRule({
      name: "media",
      params: `(min-width: ${replacedBreakPoints})`,
    })
  );
  let count = 0;
  newRule.each((node) => {
    if (node.params === `(min-width: ${replacedBreakPoints})` && count === 0) {
      count++;
      node.append({
        selector: decl.parent.selector,
        nodes: [
          { prop: decl.prop.slice(breakpoint.length), value: decl.value },
        ],
      });
    }
  });
  decl.remove();
}
module.exports.selectorAtRule = SelectorAtRule;
