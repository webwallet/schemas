'use strict'

const joi = require('joi')

const {config, schemas} = global
const previousOutputsArraySchema = require('./previous')
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
  adr: schemas.crypto.address.string.required()
    .description('cryptographic address identifier'),
  bal: balanceObjectSchema.required()
    .description('minimum, maximum and net balance properties'),
  cru: schemas.crypto.countspace.string.required()
    .description('unit of account in which the balance is denominated'),
  pre: previousOutputsArraySchema.required()
    .description('pointers to previous outputs referenced for spending')
})

module.exports = schemas
