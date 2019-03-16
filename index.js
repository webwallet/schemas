'use strict'

require('module-alias/register') // custom local paths
const requireDirectory = require('require-directory')

const formats = requireDirectory(module, './formats')

module.exports = {
  formats
}
