'use strict'

const joi = require('joi')
const signatureObjectSchema = require('./object')

const {config} = global
const {items: signatures} = config.crypto.signature

const schema = joi.array().items(signatureObjectSchema)
  .min(signatures.min).max(signatures.max).unique()
  .description('an array of digital signature objects')
  .options({stripUnknown: false})

module.exports = schema
