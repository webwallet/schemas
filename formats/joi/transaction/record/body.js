'use strict'

const joi = require('joi')

const cryptoHashObjectSchema = require('*joi/crypto/hash/object')
const cryptoSignaturesArraySchema = require('../signature/array')
const transactionRecordDataObjectSchema = require('./data')
const inputsArraySchema = require('../request/inputs')

const transactionRecordMetaObjectSchema = joi.object().keys({
  inputs: inputsArraySchema.required(),
  signatures: cryptoSignaturesArraySchema.optional()
}).description('metadata that is neither hashed nor signed')

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: transactionRecordDataObjectSchema.required(),
  meta: transactionRecordMetaObjectSchema.optional()
}).description('transaction record body')

module.exports = schema
