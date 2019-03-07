module.exports = {
  mode: 'development',
  entry: [
    "autoprefixer",
    "react",
    "react-dom",
    "redux",
    "react/index.js",
    "react-dom/index.js",
    "react-dom/profiling.js",
    "react-dom/server.browser.js",
    "react-dom/server.js",
    "react-dom/server.node.js",
    "react-dom/test-utils.js",
    "react-dom/unstable-native-dependencies.js"
  ],
  output: {
    path: __dirname,
    filename: "no-aria.js"
  }
};
