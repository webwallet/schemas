'use strict'

const joi = require('joi')

const config = require('*joi/config')

const hashLength = config.crypto.hash.length

const schema = joi.string().hex().trim()
  .min(hashLength.min).max(hashLength.max)
  .description('cryptographic hash value in hexadecimal format')

module.exports = schema
