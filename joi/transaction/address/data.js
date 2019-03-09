'use strict'

const joi = require('joi')

const addressSignerArraySchema = require('./signer/array')
const addressLockerArraySchema = require('./locker/array')

const {config} = global

const schema = joi.object().keys({
  signers: addressSignerArraySchema.required(),
  lockers: addressLockerArraySchema.required()
})

module.exports = schema
