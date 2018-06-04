'use strict'

const requireDirectory = require('require-directory')

global.config = require('./config.json')

global.schemas = {}
global.schemas.math = requireDirectory(module, './math')
global.schemas.crypto = requireDirectory(module, './crypto')

const schemas = Object.assign(global.schemas,
  requireDirectory(module, {exclude: /crypto|math/}))

module.exports = {
  schemas
}
