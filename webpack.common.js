const path = require('path')

const urls = require('./webpack.urls.js')
const entries = {}
urls.map((url) => { entries[url] = './urls/' + url + '/index.js' })

const HtmlWebpackPlugin = require('html-webpack-plugin')
const plugins = urls.map((url) => {
  return new HtmlWebpackPlugin({
    template: `./urls/${url}/index.html`,
    filename: `${url}/${url}.html`,
    inject: 'body',
    chunks: [url]
  })
})

module.exports = {
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx']
  },
  entry: entries,
  output: {
    path: path.resolve('dist'),
    filename: '[name]/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader']
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  plugins: plugins,
  devServer: {
    contentBase: `${path.resolve('dist')}`,
    open: false
  }
}
