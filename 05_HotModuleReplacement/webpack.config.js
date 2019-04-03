const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')//输出到dist目录
  },
  devtool: 'inline-source-map',//使用 source map
  devServer: {
    contentBase: './dist',//将 dist 目录下的文件，作为可访问文件。
    hot: true,//启用 HMR
  },
  plugins: [
    new CleanWebpackPlugin(),//清空dist目录
    //使用html-webpack-plugin插件，生成index.html到dist目录
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin(),//使用 webpack 内置的 HMR 插件
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
};