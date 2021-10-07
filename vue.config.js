const path = require('path')
const OUTPUT_PUBLIC_PATH = '/'

module.exports = {
  lintOnSave: true,
  publicPath: OUTPUT_PUBLIC_PATH,
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
      .end()
      .use('md-env-loader')
      .loader(path.join(__dirname, '.', 'md-env-loader.js'))
      .options({
        g: global
      })

    config
      .plugin('define')
      .tap(args => {
        // define plugin 这里配置了三个 env 变量, 并输出 define plugin run...
        console.log('define plugin run...')
        args[0]['process.env']['OUTPUT_PUBLIC_PATH'] = JSON.stringify(OUTPUT_PUBLIC_PATH)
        console.log(args)
        for (const key in process) {
          if (key.indexOf('id') !== -1) {
            console.log(`process.${key}: `, process[key])
          }
        }
        return [...args]
      })

    // config
    //   .plugin('p1')
    //   .use(path.join(__dirname, '.', 'p1.js'), [{ name: 'tesla' }])
  }
}
