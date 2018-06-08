'use strict'

const joi = require('joi')

const {schemas} = global
const transactionRecordDataSchema = require('./data')
const cryptoHashObjectSchema = schemas.crypto.hash.object
const cryptoSignaturesArraySchema = schemas.crypto.signature.array

const transactionRecordMetadata = joi.object().keys({
  signatures: cryptoSignaturesArraySchema.optional()
})

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: transactionRecordDataSchema.required()
    .description('transaction record data'),
  meta: transactionRecordMetadata.optional()
})

module.exports = schema
