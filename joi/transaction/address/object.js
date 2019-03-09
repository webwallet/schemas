'use strict'

const joi = require('joi')

const addressDataObjectSchema = require('./data')
const addressMetaObjectSchema = require('./meta')

const { schemas } = global
const cryptoHashObjectSchema = schemas.crypto.hash.object

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: addressDataObjectSchema.required(),
  meta: addressMetaObjectSchema.optional()
})

module.exports = schema
