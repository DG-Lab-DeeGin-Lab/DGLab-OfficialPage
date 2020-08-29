const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(png|jfif|jpg|gif|jpe?g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: require.resolve("file-loader"),
              name: "[name].[ext]",
              publicPath: "./assets",
              outputPath: "./assets",
              emitFile: true,
            },
          },
        ],
      },
      {
        test: /.jsx$/,
        use: {
          loader: "babel-loader",
          // loader: require.resolve('babel-loader'),
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-proposal-class-properties"
              ]]
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: { localIdentName: "[name]__[local]___[hash:base64:5]" },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./index.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist/"),
  },
  devServer: {
    contentBase: "./src",
    port: 8080,
  },
};
