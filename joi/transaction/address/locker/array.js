'use strict'

const joi = require('joi')
const addressLockerObjectSchema = require('./object')

const { config } = global
const { array: addressLockersArrayItems } = config.transaction.address.lockers

const schema = joi.array().items(addressLockerObjectSchema).unique()
  .min(addressLockersArrayItems.min).options({stripUnknown: false})
  .description('list of locking conditions for a multisig address')

module.exports = schema
