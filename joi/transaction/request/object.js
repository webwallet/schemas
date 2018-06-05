'use strict'

const joi = require('joi')

const {schemas} = global
const transactionRequestDataSchema = require('./data')
const cryptoHashObjectSchema = schemas.crypto.hash.object
const cryptoSignaturesArraySchema = schemas.crypto.signature.array

const schema = joi.object().keys({
  hash: cryptoHashObjectSchema.optional(),
  data: transactionRequestDataSchema.required()
    .description('transaction request data'),
  sigs: cryptoSignaturesArraySchema.optional()
})

module.exports = schema
