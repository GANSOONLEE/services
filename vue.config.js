

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: 'docs',
    productionSourceMap: false,
    lintOnSave: true,
    publicPath: './',
    pages: {

        // 首頁
        index: {
            entry: "./src/main.js",
            filename: 'index.html',
            template: './index.html',
            title: 'Index',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },

        // 服務頁
        service: {
            entry: "./src/main.js",
            filename: 'service.html',
            template: './index.html',
            title: 'Service',
            chunks: ['chunk-vendors', 'chunk0-common', 'index']
        },

        // 天氣頁
        weather: {
            entry: "./src/main.js",
            filename: 'weather.html',
            template: './index.html',
            title: 'Wheater',
            chunks: ['chunk-vendors', 'chunk0-common', 'index']
        }
    },
    devServer: {
        overlay: {
          warnings: true,
          errors: true
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production'
})