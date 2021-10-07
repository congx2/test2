
class P1 {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    console.log(this.options)
    for (const key in compiler.hooks) {
      console.log(`hooks.${key}: `, typeof compiler.hooks[key])
    }

    compiler.hooks.compilation.tap('p1', (compilation) => {
      // console.log(process.env)
    })
  }
}

module.exports = P1