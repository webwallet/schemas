'use strict'

const joi = require('joi')

const {config, schemas} = global
const hashStringSchema = schemas.crypto.hash.string
const inputsArrayItems = config.transaction.record.inputs.array

const recordInputSchema = joi.object().keys({
  hash: hashStringSchema.required()
    .description('IOU identifier (cryptographic hash)')
})

const schema = joi.array().items(recordInputSchema).unique()
  .min(inputsArrayItems.min).max(inputsArrayItems.max)
  .description('transaction record inputs (hashes only)')
  .options({stripUnknown: false})

module.exports = schema
