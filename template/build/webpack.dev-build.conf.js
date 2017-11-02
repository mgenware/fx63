'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const env = config.devBuild.env

const webpackConfig = merge(baseWebpackConfig, {
  watch: true,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.devBuild.productionSourceMap,
      extract: true
    })
  },
  devtool: config.devBuild.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.devBuild.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[id].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].css'),
      allChunks: true,
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (m) => /\/node_modules\//.test(m.context) 
        || /\/src\/lib1\//.test(m.context),
    }),
    // split into another common chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'another_vendor',
      minChunks: (m) => /\/node_modules\//.test(m.context) 
        || /\/src\/lib2\//.test(m.context),
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.devBuild.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = webpackConfig
