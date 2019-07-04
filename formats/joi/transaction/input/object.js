'use strict'

const joi = require('joi')
const config = require('*joi/config')

const cryptoHashObjectSchema = require('*joi/crypto/hash/object')
const cryptoSignaturesArraySchema = require('../signature/array')
const iouDataObjectSchema = require('./data')
const maxCustomDataKeys = config.transaction.request.iou.custom.keys.max

const iouMetaObjectSchema = joi.object().keys({
  signatures: cryptoSignaturesArraySchema.required(),
  custom: {
    hash: cryptoHashObjectSchema.optional(),
    data: joi.object().max(maxCustomDataKeys).required()
  }
}).description('metadata that is neither hashed nor signed')


const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: iouDataObjectSchema.required(),
  meta: iouMetaObjectSchema.required()
})

module.exports = schema
