'use strict'

const joi = require('joi')

const config = require('*joi/config')

const bigNumber = config.math.bignumber
const regex = new RegExp(bigNumber.regex.decimal.integer.negative)

const schema = joi.string().regex(regex).max(bigNumber.length.integer)
  .description('big-number string for arbitrary-precision arithmetic')

module.exports = schema
