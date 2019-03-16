'use strict'

const joi = require('joi')

const addressIdentitiesArraySchema = require('./identities/array')
const addressConditionsObjectSchema = require('./conditions/object')

const schema = joi.object().keys({
  identities: addressIdentitiesArraySchema.required()
    .description('public keys authorized to spend funds from the address'),
  conditions: addressConditionsObjectSchema.required()
    .description('spending conditions to satisfy on transaction clearing')
})

module.exports = schema
