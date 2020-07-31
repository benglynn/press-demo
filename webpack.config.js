const path = require("path");
const { createPressWebpack } = require("@benglynn/press");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const filters = require('./filters')

const markdownDirectory = path.join(__dirname, "./markdown");
const templateDirectory = path.join(__dirname, "./templates");

module.exports = {
  mode: "development",
  entry: { app: "./app/app.js" },
  devtool: "source-map",
  plugins: [
    createPressWebpack(markdownDirectory, templateDirectory),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!.gitkeep"],
    }),
  ],
};
