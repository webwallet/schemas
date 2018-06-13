'use strict'

const joi = require('joi')

const {schemas} = global
const inputsArraySchema = require('../request/inputs')
const transactionRecordDataSchema = require('./data')
const cryptoHashObjectSchema = schemas.crypto.hash.object
const cryptoSignaturesArraySchema = schemas.crypto.signature.array

const transactionRecordMetadata = joi.object().keys({
  inputs: inputsArraySchema.required(),
  signatures: cryptoSignaturesArraySchema.optional()
}).description('metadata that is neither hashed nor signed')

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: transactionRecordDataSchema.required(),
  meta: transactionRecordMetadata.optional()
}).description('transaction record body')

module.exports = schema
