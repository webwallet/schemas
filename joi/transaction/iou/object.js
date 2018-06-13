'use strict'

const joi = require('joi')

const {schemas} = global
const iouDataObjectSchema = require('./data')
const cryptoHashObjectSchema = schemas.crypto.hash.object
const cryptoSignaturesArraySchema = schemas.crypto.signature.array

const iouObjectMetadataSchema = joi.object().keys({
  signatures: cryptoSignaturesArraySchema.required()
}).description('metadata that is neither hashed nor signed')


const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: iouDataObjectSchema.required(),
  meta: iouObjectMetadataSchema.required()
})

module.exports = schema
