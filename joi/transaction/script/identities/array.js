'use strict'

const joi = require('joi')

const config = require('*joi/config')
const addressSignerObjectSchema = require('./object')

const addressSignersArrayItems = config.transaction.address.identities.array

const schema = joi.array().items(addressSignerObjectSchema).unique()
  .min(addressSignersArrayItems.min).options({stripUnknown: false})
  .description('list of public keys involved in a multisig address')

module.exports = schema
