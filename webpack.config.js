const webpack = require("webpack");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: [
    "./index.ts"
  ],
  output: {
    path: path.resolve(__dirname, "wwwroot"),
    filename: "BlazorWebpack.js"
  },
  module: {
    rules: [
      // TypeScript
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      // Style
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "wwwroot"),
    },
    port: 9000,
    historyApiFallback: true,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    }
  }
}