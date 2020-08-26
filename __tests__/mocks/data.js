export default {
  name: "react-treebeard",
  id: 1,
  toggled: true,
  terminal: true,
  children: [
    {
      name: "example",
      children: [
        { name: "app.js" },
        { name: "data.js" },
        { name: "index.html" },
        { name: "styles.js" },
        { name: "webpack.config.js" },
      ],
    },
    {
      name: "node_modules",
      loading: true,
      children: [],
    },
    {
      name: "src",
      children: [
        {
          name: "components",
          children: [{ name: "Decorators.jsx" }, { name: "Treebeard.jsx" }],
        },
        { name: "index.js" },
      ],
    },
    {
      name: "themes",
      children: [{ name: "default.js" }],
    },
    { name: "gulpfile.js" },
    { name: "index.js" },
    { name: "package.json" },
  ],
};
