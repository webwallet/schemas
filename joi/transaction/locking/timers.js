'use strict'

const joi = require('joi')

const { config } = global

const schema = joi.object().keys({
  // active
  // expiry
  // window
})

module.exports = schema
