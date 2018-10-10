'use strict'

const joi = require('joi')

const {config} = global
const {length} = config.crypto.publicKey

const schema = joi.string().hex().trim().min(length.min).max(length.max)
  .description('cryptographic public key in hexadecimal format')

module.exports = schema
