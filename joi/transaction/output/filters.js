'use strict'

const joi = require('joi')

const {config, schemas} = global
const outputFiltersArrayItems = config.transaction.record.outputs.filters.array

const outputFilterSchema = schemas.crypto.hash.string
  .description('hash pointer to a conditional filter object')

const schema = joi.array().items(outputFilterSchema).unique()
  .min(outputFiltersArrayItems.min).max(outputFiltersArrayItems.max)
  .description('array of conditional filters for a transaction output')
  .options({stripUnknown: false})

module.exports = schema
