'use strict'

const joi = require('joi')

const { config, schemas } = global

const schema = joi.object().keys({
  
}).description('locking condition for authorizing a multisig transaction')

module.exports = schema
