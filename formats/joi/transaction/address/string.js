'use strict'

const joi = require('joi')

const config = require('*joi/config')

const base58 = new RegExp(config.regex.base58)
const addressLength = config.crypto.address.length

const schema = joi.string().alphanum().regex(base58)
  .min(addressLength.min).max(addressLength.max)
  .description('identifier for a cryptographic encumbrance')

module.exports = schema
