'use strict'

const joi = require('joi')

const {config, schemas} = global
const outputScriptsArrayItems = config.transaction.record.outputs.scripts.array

const outputScriptSchema = schemas.crypto.hash.string
  .description('hash pointer to a redeem script object')

const schema = joi.array().items(outputScriptSchema).unique()
  .min(outputScriptsArrayItems.min).max(outputScriptsArrayItems.max)
  .description('array of redeem scripts for a transaction output')
  .options({stripUnknown: false})

module.exports = schema
