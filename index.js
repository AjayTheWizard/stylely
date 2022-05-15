const {
  properties,
  variables,
  breakpoints,
  selectors,
} = require("./src/constants");
const {
  ClearEmpty,
  selectorAtRule,
  selectorDecl,
  ReplaceBreakPoints,
} = require("./src");
const { TrimStart } = require("./src/helper/TrimStart");
/**
 * @type {import('postcss').PluginCreator<{ extends: { props: {}, variables : {}, breakpoints: {}, selectors: {} } }>}
 */
module.exports = (
  opts = { extends: { colors: {}, variables: {}, breakpoints: {} } }
) => {
  const props = {
    ...properties,
    ...opts.extends.props,
  };
  const values = {
    ...variables,
    ...opts.extends.variables,
  };
  const breakPoints = {
    ...breakpoints,
    ...opts.extends.breakpoints,
  };
  const Selectors = {
    ...selectors,
    ...opts.extends.selectors,
  };
  return {
    postcssPlugin: "postcss-short-css",
    Declaration(decl) {
      if (breakPoints[TrimStart(decl.prop)]) {
        let trimedBreak = TrimStart(decl.prop);
        selectorAtRule(trimedBreak, decl, breakPoints[trimedBreak]);
      }
      if (props[decl.prop]) {
        decl.assign({ prop: props[decl.prop] });
      }
      if (values[decl.value]) {
        decl.assign({ value: values[decl.value] });
      }
      if (Selectors[TrimStart(decl.prop)]) {
        let trimed = TrimStart(decl.prop);
        selectorDecl(trimed, decl, Selectors[trimed]);
      }
      // if (decl.prop.indexOf("[") && decl.prop.indexOf("]")) {
      //   console.log("Hooooooooh!");
      // }
    },
    // AtRule(rule) {
    //   if (breakPoints[rule.name]) {
    //     ReplaceBreakPoints(rule, breakPoints);
    //   }
    // },
    OnceExit(css) {
      css.each((node) => {
        ClearEmpty(node);
      });
    },
  };
};

module.exports.postcss = true;
