const { defineConfig } = require('@vue/cli-service')  // 引入vue-cli-service
module.exports = defineConfig({
  transpileDependencies: true // 可以让 vue-cli-service 自动编译所有依赖包
})
// module.exports = {
//   devServer: {
//     host: 'localhost',  //主机
//     port: 8080,     //端口
//     proxy: {  //代理
//       '/api': {   //代理的路径
//         target: 'https://www.imooc.com/',  //代理的目标地址
//         changeOrigin: true,    //是否跨域
//         pathRewrite: {  //重写路径
//           '/api':''   //代理的路径
//         }
//         }
//       }  
//     }
// }