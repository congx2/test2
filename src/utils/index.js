export const getStringTag = value => {
  if (value === null) {
    return 'Null'
  }
  if (value === undefined) {
    return 'Undefined'
  }
  return Object.prototype.toString.call(value).slice(8, -1)
}

export const isPrimitive = value => {
  if (value === null) {
    return true
  }
  const primitives = [
    'undefined',
    'string',
    'number',
    'boolean',
    'symbol',
    'bigint'
  ]
  return primitives.indexOf(typeof value) !== -1
}

export const hasKey = (object, key) => {
  return Object.prototype.hasOwnProperty.call(object, key)
}


export const getValueByPath = (object, path, defaultValue) => {
  if (typeof path !== 'string') {
    throw TypeError('Parameter path must be a string.')
  }

  if (object === null || typeof object !== 'object') {
    return defaultValue
  }

  const keyString = path
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
  const keys = []

  if (keyString.charCodeAt(0) === charCodeOfDot) {
    keys.push('')
  }

  keyString.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    } else if (expression) {
      key = expression.trim()
    }
    keys.push(key)
  })

  const size = keys.length
  let index = 0

  while (object != null && index < size) {
    let key = keys[index++]
    if (typeof key !== 'string' && typeof key !== 'symbol') {
      key += ''
    }
    object = object[key]
  }

  const val = index && index === size ? object : undefined
  return val === undefined ? defaultValue : val
}


export const deepClone = value => {
  if (isPrimitive(value)) {
    return value
  }

  const tag = getStringTag(value)
  if (tag === 'String' || tag === 'Number' || tag === 'Boolean' || tag === 'Date') {
    return new value.constructor(value.valueOf())
  }

  if (tag === 'Symbol' || tag === 'BigInt') {
    return Object(value)
  }

  if (tag === 'RegExp') {
    const source = value.source
    const flag = value.toString().split('/').pop()
    return new RegExp(source, flag)
  }
}
