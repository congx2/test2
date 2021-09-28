module.exports = {
  publicPath: './',
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       // {
  //       //   resourceQuery: /raw/,
  //       //   type: 'asset/resource',
  //       // }
  //       {
  //         test: /\.(txt|md)$/,
  //         use: 'raw-loader'
  //       }
  //     ]
  //   }
  // },
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

    config.module
    .rule('md')
    .test(/\.(txt|md)$/)
    .pre()
    .use('raw-loader')
    .loader('raw-loader')
    .options({
      esModule: false
    })
    // .options({
    //    lessOptions: {
    //    /**less-loader 配置 */
    //      strictMath: true,
    //      noIeCompat: true
    //    }
    // })
  }
}
