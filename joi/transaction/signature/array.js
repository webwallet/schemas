'use strict'

const joi = require('joi')

const config = require('*joi/config')
const signatureObjectSchema = require('./object')

const signatureObjectItems = config.crypto.signature.array

const schema = joi.array().items(signatureObjectSchema).unique()
  .min(signatureObjectItems.min).max(signatureObjectItems.max)
  .description('an array of digital signature objects')
  .options({stripUnknown: false})

module.exports = schema
