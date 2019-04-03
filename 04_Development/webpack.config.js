const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')//输出到dist目录
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'//将 dist 目录下的文件，作为可访问文件。
  },
  plugins: [
    new CleanWebpackPlugin(),//清空dist目录
    //使用html-webpack-plugin插件，生成index.html到dist目录
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};