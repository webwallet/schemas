'use strict'

const joi = require('joi')

const bigNumberSigned = require('*joi/math/bignumber/decimal/fractional/signed')

const schema = joi.object().keys({
  net: bigNumberSigned.required()
    .description('number of units accounted by the output'),
  min: bigNumberSigned.required()
    .description('lower limit constraint for the net balance property'),
  max: bigNumberSigned.required()
    .description('upper limit constraint for the net balance property')
})

module.exports = schema
