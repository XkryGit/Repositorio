const { merge } = require('webpack-merge');
const base = require('./base');
const helpers = require('./helpers');
const Dotenv = require('dotenv-webpack');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: './js/[name].[chunkhash].js',
    assetModuleFilename: './images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          name: './images/[name].[hash].[ext]',
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new Dotenv({
      path: 'prod.env',
    }),
  ],
});
