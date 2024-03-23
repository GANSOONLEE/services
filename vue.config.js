

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  productionSourceMap: false,
  lintOnSave: false,
  pages: {
        
    // 首頁
    index: {
        entry: "src/pages/index.js",
        entry: 'src/pages/index.html',
        template: 'src/pages/template.html',
        filename: 'index.html',
        title: 'Index',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
    },

    // 服務頁
    service: {
        entry: "src/pages/service.js",
        filename: 'service.html',
        title: 'Service',
        chunks: ['chunk-vendors', 'chunk0-common', 'index']
    }
}
})