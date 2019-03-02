'use strict'

const joi = require('joi')

const { schemas } = global
const bigNumberStringSchemas = schemas.math.bignumber.decimal.fractional

const schema = joi.object().keys({
  net: bigNumberStringSchemas.signed.required()
    .description('number of units accounted by the output'),
  min: bigNumberStringSchemas.signed.required()
    .description('lower limit constraint for the net balance property'),
  max: bigNumberStringSchemas.signed.required()
    .description('upper limit constraint for the net balance property')
})

module.exports = schema
