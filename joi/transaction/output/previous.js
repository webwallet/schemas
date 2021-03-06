'use strict'

const joi = require('joi')

const {config, schemas} = global
const transactionPointerSchema = config.transaction.record.pointer
const outputPointersArrayItems = transactionPointerSchema.array
const regex = new RegExp(transactionPointerSchema.regex)
const {min, max} = transactionPointerSchema.length

const outputPointerSchema = joi.string().regex(regex).min(min).max(max)
  .description('transaction pointer in hash::index format')

const schema = joi.array().items(outputPointerSchema).unique()
  .min(outputPointersArrayItems.min).max(outputPointersArrayItems.max)
  .description('array of transaction hash pointers')
  .options({stripUnknown: false})

module.exports = schema
