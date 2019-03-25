const glob = require('glob')
const path = require('path')
const PAGES_PATH = path.resolve(__dirname, './src/pages')

const pages = {}

const pageConfig = {
  bookmarks: '书签管理',
  dashboard: '仪表盘'
}

let defaultPage = 'index'

for (let key in pageConfig) {
  defaultPage = key
  break
}

glob.sync(PAGES_PATH + '/*/main.js').forEach(filepath => {
  const pageName = path.basename(path.dirname(filepath))
  pages[pageName] = {
    entry: filepath,
    filename: `${pageName}.html`,
    chunks: ['chunk-vendors', 'chunk-common', pageName]
  }
  if (pageConfig[pageName]) {
    if (typeof pageConfig[pageName] === 'string') {
      pages[pageName].title = pageConfig[pageName]
    } else if (typeof pageConfig[pageName] === 'object') {
      for (let key in pageConfig[pageName]) {
        if (pageConfig[pageName][key]) {
          pages[pageName][key] = pageConfig[pageName][key]
        }
      }
    }
  }
  if (defaultPage === pageName) {
    pages[pageName].filename = 'index.html'
  }
 })

 module.exports = pages
