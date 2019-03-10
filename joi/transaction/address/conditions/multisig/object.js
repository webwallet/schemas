'use strict'

const joi = require('joi')

const schema = joi.object().keys({
  threshold: joi.number().integer().positive().required()
}).description('spending conditions for multisig transactions')

module.exports = schema
