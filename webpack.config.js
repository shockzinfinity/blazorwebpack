const webpack = require("webpack");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: [
    "./index.js"
  ],
  output: {
    path: path.resolve(__dirname, "wwwroot"),
    filename: "BlazorWebpack.js"
  }
}