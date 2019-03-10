'use strict'

const joi = require('joi')

const addressConditionsArraySchema = require('./conditions/array')
const addressIdentitiesArraySchema = require('./identities/array')

const schema = joi.object().keys({
  identities: addressIdentitiesArraySchema.required()
    .description('public keys authorized to spend funds from the address'),
  conditions: addressConditionsArraySchema.required()
    .description('spending conditions to satisfy on transaction clearing')
})

module.exports = schema
