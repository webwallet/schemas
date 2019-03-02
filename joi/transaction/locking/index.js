'use strict'

const joi = require('joi')

const lockingPuzzleStringSchema = require('./puzzle')
const lockingTimersObjectSchema = require('./timers')
const lockingScriptStringSchema = require('./script')

const schema = joi.object().keys({
  puzzle: lockingPuzzleStringSchema.optional()
    .description('output hashlock restriction'),
  timers: lockingTimersObjectSchema.optional()
    .description('output timelock restrictions'),
  script: lockingScriptStringSchema.optional()
    .description('cryptographic hash of a redeem script')
}).description('locking conditions for spending a transaction output')

module.exports = schema
