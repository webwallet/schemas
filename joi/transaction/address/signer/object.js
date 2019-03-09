'use strict'

const joi = require('joi')

const { config, schemas } = global

const schema = joi.object().keys({
  
}).description('properties related to a public key in a multisig address')

module.exports = schema
