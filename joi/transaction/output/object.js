'use strict'

const joi = require('joi')

const outputBalanceObjectSchema = require('./balance')
const outputLockingObjectSchema = require('../locking')
const outputSourcesArraySchema = require('./sources')

const schema = joi.object().keys({
  address: schemas.crypto.address.string.required()
    .description('holder of the units accounted by the output'),
  balance: outputBalanceObjectSchema.required()
    .description('minimum, maximum and net balance properties'),
  counter: schemas.crypto.countspace.string.required()
    .description('unit of account in which the balance is denominated'),
  locking: outputLockingObjectSchema.optional()
    .description('locking conditions for spending the output'),
  sources: outputSourcesArraySchema.required()
    .description('hash pointers to previous outputs to be used as sources')
})

module.exports = schema
