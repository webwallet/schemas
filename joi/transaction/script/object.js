'use strict'

const joi = require('joi')

const cryptoHashObjectSchema = require('*joi/crypto/hash/object')
const addressDataObjectSchema = require('./data')
const addressMetaObjectSchema = require('./meta')

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.required(),
  data: addressDataObjectSchema.required(),
  meta: addressMetaObjectSchema.optional()
})

module.exports = schema
