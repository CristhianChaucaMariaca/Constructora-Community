const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "app.js",
  },
  devServer: {
    port: 5000,
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          /* { loader: MiniCssExtractPlugin.loader },
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }, */
        ],
      },
      // FIXME: Resolver problema de importación de archivos con webpack
      // {
      //     test: /\.(png|jpe?g|gif)$/i,
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: './dist/media/',
      //       publicPath: './src/assets/',
      //     },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./src/pug/pages/", "index.pug"),
    }),
    new HtmlWebpackPlugin({
      filename: "Servicios.html",
      template: path.resolve("./src/pug/pages/", "servicios.pug"),
    }),
    new HtmlWebpackPlugin({
      filename: "Nosotros.html",
      template: path.resolve("./src/pug/pages/", "nosotros.pug"),
    }),
    new HtmlWebpackPlugin({
      filename: "Contacto.html",
      template: path.resolve("./src/pug/pages/", "contactos.pug"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
