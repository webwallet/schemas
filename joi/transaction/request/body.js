'use strict'

const joi = require('joi')

const {schemas} = global
const transactionRequestDataSchema = require('./data')
const cryptoHashObjectSchema = schemas.crypto.hash.object
const cryptoSignaturesArraySchema = schemas.crypto.signature.array

const transactionRequestMetadata = joi.object().keys({
  signatures: cryptoSignaturesArraySchema.optional()
}).description('metadata that is neither hashed nor signed')

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.optional(),
  data: transactionRequestDataSchema.required(),
  meta: transactionRequestMetadata.optional()
}).description('transaction request body')

module.exports = schema
