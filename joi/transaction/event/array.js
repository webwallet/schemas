'use strict'

const joi = require('joi')

const { config, schemas } = global
const eventSchema = schemas.crypto.hash.string
const eventsArrayItems = config.transaction.events.array

const schema = joi.array().items(eventSchema).unique()
  .min(eventsArrayItems.min).max(eventsArrayItems.max)
  .description('array of event identifiers')
  .options({stripUnknown: false})

module.exports = schema
