var path       = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  ['bootstrap-loader', './src/index.js'],
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Make available bootstrap's variables:
              resources: './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[name].[hash].[ext]',
          }
        }
      },
      {
        // Make jquery available to bootstrap:
        test: /bootstrap-sass\/assets\/javascripts\//,
        use: 'imports-loader?jQuery=jquery'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' })
  ]
};
