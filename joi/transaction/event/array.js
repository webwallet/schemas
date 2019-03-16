'use strict'

const joi = require('joi')

const config = require('*joi/config')
const eventSchema = require('*joi/crypto/hash/string')

const eventsArrayItems = config.transaction.events.array

const schema = joi.array().items(eventSchema).unique()
  .min(eventsArrayItems.min).max(eventsArrayItems.max)
  .description('array of event identifiers')
  .options({stripUnknown: false})

module.exports = schema
