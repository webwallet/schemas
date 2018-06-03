'use strict'

const directory = './joi'

const requireDirectory = require('require-directory')
global.config = require(`${directory}/config.json`)
const schemas = requireDirectory(module, directory)

module.export = schemas
