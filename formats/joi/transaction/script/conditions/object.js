'use strict'

const joi = require('joi')

const multisigConditionsObjectSchema = require('./multisig/object')

const schema = joi.object().keys({
  multisig: multisigConditionsObjectSchema.optional()
}).description('spending conditions to satisfy on transaction clearing')

module.exports = schema
