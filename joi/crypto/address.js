'use strict'

const joi = require('joi')
const config = global.config
const base58 = new RegExp(config.regex.base58)
const {min, max} = config.lengths.crypto.address

const schema = joi.string().alphanum().regex(base58).min(min).max(max)
  .description('identifier for a cryptographic encumbrance')

module.exports = schema
