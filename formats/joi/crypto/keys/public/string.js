'use strict'

const joi = require('joi')

const config = require('*joi/config')

const publicKeyLength = config.crypto.publicKey.length

const schema = joi.string().hex().trim()
  .min(publicKeyLength.min).max(publicKeyLength.max)
  .description('cryptographic public key in hexadecimal format')

module.exports = schema
