'use strict'

const joi = require('joi')

const {schemas} = global
const cryptoHashObjectSchema = schemas.crypto.hash.object
const cryptoSignaturesArraySchema = schemas.crypto.signature.array
const transactionDataObjectSchema = require('./data')

const transactionMetaObjectSchema = joi.object().keys({
  signatures: cryptoSignaturesArraySchema.optional()
}).description('metadata that is neither hashed nor signed')

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.optional(),
  data: transactionDataObjectSchema.required(),
  meta: transactionMetaObjectSchema.optional()
}).description('transaction request object')

module.exports = schema
