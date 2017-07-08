var path       = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path:     path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        use:     ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' })
  ]
};
