var path         = require('path');
var Merge        = require('webpack-merge');
var webpack      = require('webpack');
var CommonConfig = require('./webpack.config.js');

module.exports = function() {
  return Merge(
    CommonConfig,
    {
      output: {
        path: path.resolve(__dirname, 'dist_prod')
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin()
      ]
    }
  );
};
