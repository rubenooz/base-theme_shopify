const webpackObfuscator = require('webpack-obfuscator')
const path = require('path')
const fs = require('fs')

const directoryPath = './zrc/scripts'

const files = fs.readdirSync(directoryPath)

const filePaths = files
  .filter(file => /\.js$/.test(file))
  .map(file => ({
    [file.replace('.js', '')]: "./"+path.join(directoryPath, file)
  }))

module.exports = {
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  watch: process.env.NODE_ENV == 'production' ? false  : true,
  entry: Object.assign({}, ...filePaths),
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].min.js'
  },
  plugins: [
    new webpackObfuscator ({
      rotateStringArray: true
    }, Object.keys(filePaths))
  ]
}
