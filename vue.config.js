module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
      port: 8080,
      open: true, //配置自动启动浏览器
      host: 'localhost',
      proxy: {
            '/api': {
            target: 'http://localhost:3000', //服务器接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
        }
      }
  }
}