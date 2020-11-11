const path = require("path");
const { createPressWebpack } = require("@benglynn/press");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// when we have https://github.com/benglynn/press/issues/35
// const filters = require("./filters");

const markdownDirectory = path.join(__dirname, "./markdown");
const templateDirectory = path.join(__dirname, "./templates");

module.exports = {
  mode: "development",
  entry: { app: "./app/app.js" },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    createPressWebpack(markdownDirectory, templateDirectory),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!.gitkeep"],
    }),
    new MiniCssExtractPlugin({ filename: `[name].css` }),
  ],
};
