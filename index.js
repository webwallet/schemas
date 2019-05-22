'use strict'

const moduleAlias = require('module-alias') // custom local paths
moduleAlias.addAlias('*joi', __dirname + '/formats/joi')
moduleAlias()

const samples = require('./samples')
const formats = require('./formats')

const selector = (format) => {
  return formats[format]
}

selector.samples = samples
selector.formats = formats

module.exports = selector
