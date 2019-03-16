'use strict'

require('module-alias/register') // custom local paths

const requireDirectory = require('require-directory')

const joi = requireDirectory(module, './joi')

module.exports = {
  joi
}
