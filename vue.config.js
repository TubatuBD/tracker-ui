// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // This is the equivalent of webpack's output.publicPath
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  devServer: {
    // This will tell the dev server to proxy any unknown requests (requests that did not match a static file) to http://localhost:4000.
    proxy: 'http://localhost:4000'
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: require('./pages')
}
