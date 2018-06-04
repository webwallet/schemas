'use strict'

const joi = require('joi')
const hashStringSchema = require('./string')

const {config} = global
const {algorithms, generation} = config.crypto.hash

const schema = joi.object().keys({
  alg: joi.string().valid(algorithms).default(algorithms[0]).required()
    .description('colon-separated sequence of cryptographic hash algorithms'),
  typ: joi.string().valid(generation).default(generation[0])
    .description('colon-separated list of instructions for hash generation'),
  val: hashStringSchema.required()
}).description('set of properties for describing a cryptographic hash value')

module.exports = schema
