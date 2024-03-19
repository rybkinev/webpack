const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dev',
    hot: true,
  },
  stats: {
   children: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, 'dev'),
  },
};