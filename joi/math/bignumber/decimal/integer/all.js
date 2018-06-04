'use strict'

const joi = require('joi')

const {config} = global
const bigNumber = config.math.bignumber
const regex = new RegExp(bigNumber.regex.decimal.integer.all)

const schema = joi.string().regex(regex).max(bigNumber.length.integer)
  .description('big-number string for arbitrary-precision arithmetic')

module.exports = schema
