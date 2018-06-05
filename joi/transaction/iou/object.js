'use strict'

const joi = require('joi')

const {schemas} = global
const iouDataObjectSchema = require('./data')
const cryptoHashObjectSchema = schemas.crypto.hash.object
const cryptoSignaturesArraySchema = schemas.crypto.signature.array

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: iouDataObjectSchema.required(),
  sigs: cryptoSignaturesArraySchema.required()
})

module.exports = schema
