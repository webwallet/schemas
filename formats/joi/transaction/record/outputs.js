'use strict'

const joi = require('joi')

const config = require('*joi/config')
const outputObjectSchema = require('../output/object')

const outputsArrayItems = config.transaction.record.outputs.array

const schema = joi.array().items(outputObjectSchema).unique()
  .min(outputsArrayItems.min).max(outputsArrayItems.max)
  .description('array of transaction record outputs')
  .options({stripUnknown: false})

module.exports = schema
