const loaderUtils = require('loader-utils')


const stringToPath = string => {
  const charCodeOfDot = '.'.charCodeAt(0)
  const reEscapeChar = /\\(\\)?/g
  const rePropName = RegExp(
    // Match anything that isn't a dot or bracket.
    '[^.[\\]]+' + '|' +
    // Or match property names within brackets.
    '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' + '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' + '|' +
    // Or match "" as the space between consecutive dots or empty brackets.
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
    , 'g')
  const result = []
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }
  string.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    } else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  })
  return result
}

const toKey = value => {
  const type = typeof value
  return (type === 'string' || type === 'symbol') ? value : value + ''
}


const getValue = (object, path, defaultValue = '') => {
  if (object === null || typeof object !== 'object') {
    return defaultValue
  }
  const keys = stringToPath(path, object)
  const size = keys.length
  let index = 0

  while (object != null && index < size) {
    object = object[toKey(keys[index++])]
  }
  const result = (index && index == size) ? object : undefined
  return result === undefined ? defaultValue : result
}

// 自定义 markdown-loader
module.exports = function env(source) {
  const callback = this.async()
  setTimeout(() => {
    try {
      const options = loaderUtils.getOptions(this)
      const varReg = /\{\{\s*(\S+)\s*\}\}/ig
      // 在 loader 里面读取 env 变量
      console.log('')
      console.log('md-loader run...')
      console.log('NODE_ENV: ', process.env.NODE_ENV)
      console.log('BASE_URL: ', process.env.BASE_URL)
      console.log('OUTPUT_PUBLIC_PATH: ', process.env.OUTPUT_PUBLIC_PATH)
      console.log('global.process === process: ', global.process === process)
      // const g = { ...options.g }
      // delete g.global
      // console.log(JSON.stringify(options.g.process.env))
      for (const key in process) {
        if (key.indexOf('id') !== -1) {
          console.log(`process.${key}: `, process[key])
        }
      }
      const result = source.toString().replace(varReg, (p, p1) => getValue(global, p1))
      callback(null, result)
    } catch (error) {
      callback(error)
    }
  }, 100);
}