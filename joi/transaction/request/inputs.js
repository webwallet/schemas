'use strict'

const joi = require('joi')

const {config, schemas} = global
const transactionRequestInputObjectSchema = require('../iou/object')
const inputsArrayItems = config.transaction.record.inputs.array

const schema = joi.array().items(transactionRequestInputObjectSchema).unique()
  .min(inputsArrayItems.min).max(inputsArrayItems.max)
  .description('transaction request inputs (signed objects)')
  .options({stripUnknown: false})

module.exports = schema
