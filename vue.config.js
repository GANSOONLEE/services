

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
            entry: "./src/pages/index.js",
            filename: 'index.html',
            template: './src/pages/index.html',
            title: 'Index',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },

        // 服務頁
        service: {
            entry: "./src/pages/service.js",
            filename: 'service.html',
            template: './src/pages/service.html',
            title: 'Service',
            chunks: ['chunk-vendors', 'chunk0-common', 'service']
        },

        // 天氣頁
        weather: {
            entry: "./src/pages/weather.js",
            filename: 'weather.html',
            template: './src/pages/weather.html',
            title: 'Wheater',
            chunks: ['chunk-vendors', 'chunk0-common', 'weather']
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