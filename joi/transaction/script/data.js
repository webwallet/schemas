'use strict'

const joi = require('joi')

const addressIdentitiesArraySchema = require('./identities/array')
const addressConditionsObjectSchema = require('./conditions/object')
// const addressParametersObjectSchema = require('./parameters/object')

const schema = joi.object().keys({
  identities: addressIdentitiesArraySchema.required()
    .description('public keys authorized to spend funds from the address'),
  // parameters:
    // .description('')
  conditions: addressConditionsObjectSchema.required()
    .description('spending conditions to satisfy on transaction clearing')
})

module.exports = schema
