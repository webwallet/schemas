'use strict'

require('module-alias/register') // custom local paths

const samples = require('./samples')
const formats = require('./formats')

const selector = (format) => {
  return formats[format]
}

selector.samples = samples
selector.formats = formats

module.exports = selector
