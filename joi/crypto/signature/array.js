'use strict'

const joi = require('joi')
const signatureObjectSchema = require('./object')

const {config} = global
const {array: signatureObjectItems} = config.crypto.signature

const schema = joi.array().items(signatureObjectSchema).unique()
  .min(signatureObjectItems.min).max(signatureObjectItems.max)
  .description('an array of digital signature objects')
  .options({stripUnknown: false})

module.exports = schema
