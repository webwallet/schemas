'use strict'

const joi = require('joi')

const cryptoHashObjectSchema = require('*joi/crypto/hash/object')
const cryptoSignaturesArraySchema = require('../signature/array')
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
