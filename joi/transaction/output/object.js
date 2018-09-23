'use strict'

const joi = require('joi')

const {config, schemas} = global
const outputFiltersArraySchema = require('./filters')
const outputScriptsArraySchema = require('./scripts')
const outputSourcesArraySchema = require('./sources')
const bigNumberStringSchemas = schemas.math.bignumber.decimal.fractional

const balanceObjectSchema = joi.object().keys({
  net: bigNumberStringSchemas.signed.required()
    .description('number of units accounted by the output'),
  min: bigNumberStringSchemas.signed.required()
    .description('lower limit constraint for the net balance property'),
  max: bigNumberStringSchemas.signed.required()
    .description('upper limit constraint for the net balance property')
})

const schema = joi.object().keys({
  address: schemas.crypto.address.string.required()
    .description('holder of the units accounted by the output'),
  balance: balanceObjectSchema.required()
    .description('minimum, maximum and net balance properties'),
  counter: schemas.crypto.countspace.string.required()
    .description('unit of account in which the balance is denominated'),
  filters: outputFiltersArraySchema.optional()
    .description('conditional filters to pass before clearing a transaction'),
  scripts: outputScriptsArraySchema.optional()
    .description('redeem scripts to evaluate before clearing a transaction'),
  sources: outputSourcesArraySchema.required()
    .description('hash pointers to previous outputs to be used as sources')
})

module.exports = schemas
