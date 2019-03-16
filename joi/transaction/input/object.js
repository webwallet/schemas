'use strict'

const joi = require('joi')

const cryptoHashObjectSchema = require('*joi/crypto/hash/object')
const cryptoSignaturesArraySchema = require('../signature/array')
const iouDataObjectSchema = require('./data')

const iouMetaObjectSchema = joi.object().keys({
  signatures: cryptoSignaturesArraySchema.required()
}).description('metadata that is neither hashed nor signed')


const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: iouDataObjectSchema.required(),
  meta: iouMetaObjectSchema.required()
})

module.exports = schema
