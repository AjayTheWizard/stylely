# Stylely

**The Next Generation StyleSheets**

- **_No More Media Queries_**
- **_No More Pseudo Selectors_**
- **_New Shorthand CSS Properties_**

> Stylely is inspired by TailwindCSS, Chakra UI and Open Props

Read [Official Docmentation](https://stylely-docs.vercel.app/) to know more about it.

## Demo

```css
.foo {
  bg: white;
  bd: 1px solid black;
  color: black;
  focus-bg: black;
  focus-bd-color: 1px solid white;
  focus-color: white;
}
```

would be converted into,

```css
.foo {
  background: white;
  border: 1px solid black;
  color: black;
}
.foo:focus {
  background: black;
  border-color: white;
  color: white;
}
```

## Installation

**Step 1:** Install plugin:

```
npm i -D postcss stylely
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```js
module.exports = {
  plugins: [require("stylely")],
};
```
