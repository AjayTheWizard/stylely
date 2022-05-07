const { properties, variables } = require("./src/constants");
const postcss = require("postcss");
const { ClearEmpty, selectorAtRule, selectorDecl } = require("./src")
const { log } = console;
/**
 * @type {import('postcss').PluginCreator}
 */
const plugin = (opts = { extend: {}, variables: {} }) => {
  const props = {
    ...properties,
    ...opts.extend,
  };
  const values = {
    ...variables,
    ...opts.variables,
  };
  return {
    postcssPlugin: "postcss-short-css",
    Declaration(decl) {
      if (decl.prop.startsWith("lg-")) {
        selectorAtRule("lg-", decl);
      }
      if (decl.prop.startsWith("sm-")) {
        selectorAtRule("sm-", decl);
      }
      if (decl.prop.startsWith("md-")) {
        selectorAtRule("md-", decl);
      }
      if (decl.prop.startsWith("xl-")) {
        selectorAtRule("xl-", decl);
      }
      if (decl.prop.startsWith("2xl-")) {
        selectorAtRule("2xl-", decl);
      }
      if (decl.prop.startsWith("after-")) {
        selectorDecl("after-", decl, ":after");
      }
      if (decl.prop.startsWith("before-")) {
        selectorDecl("before-", decl, ":before");
      }
      if (decl.prop.startsWith("focus-")) {
        selectorDecl("focus-", decl, ":focus");
      }
      if (decl.prop.startsWith("hover-")) {
        selectorDecl("hover-", decl, ":hover");
      }
      if (decl.prop.startsWith("active-")) {
        selectorDecl("active-", decl, ":active");
      }
      if (decl.prop.startsWith("last-")) {
        selectorDecl("last-", decl, ":last-child");
      }
      if (decl.prop.startsWith("first-")) {
        selectorDecl(":first-child-", decl, ":first-child");
      }
      if (decl.prop.startsWith("odd-")) {
        selectorDecl("odd-", decl, ":nth-child(odd)");
      }
      if (decl.prop.startsWith("even-")) {
        selectorDecl("even-", decl, ":nth-child(even)");
      }
      if (decl.prop.startsWith("disabled-")) {
        selectorDecl("disabled-", decl, ":disabled");
      }
      if (decl.prop.startsWith("invalid-")) {
        selectorDecl("invalid-", decl, ":invalid");
      }
      if (decl.prop.startsWith("valid-")) {
        selectorDecl("valid-", decl, ":valid");
      }
      if (decl.prop.startsWith("holder-")) {
        selectorDecl("holder-", decl, "::placeholder");
      }
      if (decl.prop.startsWith("select-")) {
        selectorDecl("select-", decl, "::selection");
      }
      if (decl.prop.startsWith("firstline-")) {
        selectorDecl("firstline-", decl, "::first-line");
      }
      if (decl.prop.startsWith("firstletter-")) {
        selectorDecl("firstletter-", decl, "::first-letter");
      }
      if (decl.prop.startsWith("marker-")) {
        selectorDecl("marker-", decl, "::marker");
      }
      if (decl.prop.startsWith("focuswithin-")) {
        selectorDecl("focuswithin-", decl, ":focus-within");
      }
      if (decl.prop.startsWith("focusvisible-")) {
        selectorDecl("focusvisible-", decl, ":focus-visible");
      }
      if (decl.prop.startsWith("visited-")) {
        selectorDecl("visited-", decl, ":visited");
      }
      if (decl.prop.startsWith("target-")) {
        selectorDecl("target-", decl, ":target");
      }
      if (decl.prop.startsWith("only-")) {
        selectorDecl("only-", decl, ":only-child");
      }
      if (decl.prop.startsWith("empty-")) {
        selectorDecl("empty-", decl, ":empty");
      }
      if (decl.prop.startsWith("checked-")) {
        selectorDecl("checked-", decl, ":checked");
      }
      if (decl.prop.startsWith("indeterminate-")) {
        selectorDecl("indeterminate-", decl, ":indeterminate");
      }
      if (decl.prop.startsWith("default-")) {
        selectorDecl("default-", decl, ":default");
      }
      if (decl.prop.startsWith("required-")) {
        selectorDecl("required-", decl, ":required");
      }
      if (decl.prop.startsWith("outofrange-")) {
        selectorDecl("outofrange-", decl, ":out-of-range");
      }
      if (decl.prop.startsWith("inrange-")) {
        selectorDecl("inrange-", decl, ":in-range");
      }
      if (decl.prop.startsWith("holdershown-")) {
        selectorDecl("holdershown-", decl, ":placeholder-shown");
      }
      if (decl.prop.startsWith("autofill-")) {
        selectorDecl("autofill-", decl, ":autofill");
      }
      if (decl.prop.startsWith("readonly-")) {
        selectorDecl("readonly-", decl, ":read-only");
      }
      if (decl.prop.startsWith("open-")) {
        selectorDecl("open-", decl, "[open]");
      }
      if (props[decl.prop]) {
        decl.assign({ prop: props[decl.prop] });
      }
      if (values[decl.value]) {
        decl.assign({ value: values[decl.value] });
      }
    },
    OnceExit(css) {
      css.each((node) => {
        ClearEmpty(node);
      });
    },
  };
};
module.exports.postcss = true;

async function run(input, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  log(result.css);
}
run(
  `a{ xl-focus-last-color: pink; first-bg: pink; } `
);
