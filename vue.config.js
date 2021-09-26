module.exports = {
  chainWebpack: config => {
    config.module
    .rule('less')
    .use('less-loader')
    .loader('less-loader')
    .options({
       lessOptions: {
       /**less-loader 配置 */
         strictMath: true,
         noIeCompat: true
       }
    })
  }
}
