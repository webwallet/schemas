'use strict'

const joi = require('joi')

const config = require('*joi/config')
const hashStringSchema = require('./string')

const { algorithms, generation } = config.crypto.hash

const schema = joi.object().keys({
  types: joi.string().valid(algorithms).default(algorithms[0]).required()
    .description('colon-separated sequence of cryptographic hash algorithms'),
  steps: joi.string().valid(generation).default(generation[0])
    .description('colon-separated list of instructions for hash generation'),
  value: hashStringSchema.required()
}).description('properties for describing a cryptographic hash value')

module.exports = schema
