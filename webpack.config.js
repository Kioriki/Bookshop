// Импортируем модуль плагина в нашу конфигурацию.
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');



module.exports = {
  entry: './index.js',
  output: {
    filename: "main.js"
  },
  module: {
    rules: [
      {
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
				pretty: true
				}
			},
      // {
      //   // Для всех файлов HTML
      //   test: /\.html$/,
      //   use: [
      //     {
      //       // Воспользуемся загрузчиком html-loader
      //       loader: "html-loader",
      //       // Который заодно проминимизирует наш HTML
      //       options: {
      //         minimize: true,
      //         sources: false
      //       }
      //     }
      //   ]
      // },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      
    ]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    // Скопируем наш index.html в папку dist
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images'),
          to: path.resolve(__dirname, 'dist/images')
        }
      ],
    }),
  ]
};