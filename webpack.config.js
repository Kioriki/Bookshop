const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development', 
    plugins: [new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()],
    module: {
        rules: [
          {
            test:  /\.s[ac]ss$/i, 
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        ],
      },

}
