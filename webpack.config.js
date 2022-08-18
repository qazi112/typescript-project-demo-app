const path = require("path");

module.exports = {
  entry: "./src/front/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "bin"),
  },
  devtool: "eval-source-map",
  devServer: {
    static: [path.join(__dirname, "public"), path.join(__dirname, "bin")],
    port: 3000,
  },
};
