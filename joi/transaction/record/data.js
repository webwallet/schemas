'use strict'

const joi = require('joi')

const events = require('../event/array')
const inputs = require('./inputs')
const outputs = require('./outputs')

const schema = joi.object().keys({
  events: events.optional()
    .description('set of events associated with the transaction'),
  inputs: inputs.required()
    .description('set of instructions executed in the transaction'),
  outputs: outputs.required()
    .description('set of results after clearing the transaction')
})

module.exports = schema
