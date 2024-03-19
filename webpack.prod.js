const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
    static: './dist',
    hot: false,
  },
  stats: {
   children: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: 'main.js',
    clean: true,
  },
};