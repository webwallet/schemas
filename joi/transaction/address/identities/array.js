'use strict'

const joi = require('joi')
const addressSignerObjectSchema = require('./object')

const { config } = global
const { array: addressSignersArrayItems } = config.transaction.address.signers

const schema = joi.array().items(addressSignerObjectSchema).unique()
  .min(addressSignersArrayItems.min).options({stripUnknown: false})
  .description('list of public keys involved in a multisig address')

module.exports = schema
