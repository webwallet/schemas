'use strict'

const joi = require('joi')

const { config } = global
const { length } = config.crypto.hash

const schema = joi.string().hex().trim().min(length.min).max(length.max)
  .description('cryptographic hash value in hexadecimal format')

module.exports = schema
