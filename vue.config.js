const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/iview-admin/'
  : '/'

module.exports = {
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  baseUrl : BASE_URL,
  chainWebpack: config => {
  	config.resolve.alias
  		.set('@',resolve('src'))  
  		.set('_c',resolve('src/components')) 
  },
  //打包时不生成map文件-减少打包的体积
  productionSourceMap : false ,
  //跨域配置
  devServer : {
  	proxy : 'http://localhost:8080'
  }
}
