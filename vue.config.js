//module.exports抛出
module.exports = {
  devServer: {
      proxy: {  //配置跨域
          '/api': { // 匹配所有以 '/api'开头的请求路径
              target: 'http://localhost:4000', //这里后台的地址模拟的;应该填写你们真实的后台接口
              changeOrigin: true,   //允许跨域
              ws: true,
              pathRewrite: {
                  '/api': ''  // 重写路径: 去掉路径中开头的'/api'
              }
          }
      }
  }
}