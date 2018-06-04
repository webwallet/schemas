'use strict'

const joi = require('joi')

const {config} = global
const {length} = config.crypto.signature

const schema = joi.string().hex().trim().min(length.min).max(length.max)
  .description('DER encoded digital signature')

module.exports = schema
