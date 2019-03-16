'use strict'

const joi = require('joi')

const config = require('*joi/config')

const signatureLength = config.crypto.signature.length

const schema = joi.string().hex().trim()
  .min(signatureLength.min).max(signatureLength.max)
  .description('DER encoded digital signature')

module.exports = schema
