const { default: postcss } = require("postcss");
const { breakpoints } = require("../constants");
const { trimEnd } = require("./TrimEnd");

function SelectorAtRule(breakpoint = "", decl) {
  const bd = breakpoints[trimEnd(breakpoint)];
  const newRule = decl.parent.parent.append(
    postcss.atRule({
      name: "media",
      params: `(min-width: ${bd})`,
    })
  );
  let count = 0;
  newRule.each((node) => {
    if (node.params === `(min-width: ${bd})` && count === 0) {
      count++;
      node.append({
        selector: decl.parent.selector,
        nodes: [
          { prop: decl.prop.slice(breakpoint.length), value: decl.value },
        ],
      });
    } else {
    }
  });
  decl.remove();
}
module.exports.selectorAtRule = SelectorAtRule;
