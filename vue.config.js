var path = require('path')
var express = require('express')
var proxy = require('http-proxy-middleware')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack(config) {
        config.resolve.alias
            .set('pages', resolve('src/pages'))
            .set('base', resolve('src/base'))
            .set('common', resolve('src/common'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gm.weasing.cn',
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                // secure: false,  // 如果是https接口，需要配置这个参数
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    } 
}