'use strict'

const joi = require('joi')

const config = require('*joi/config')

const schema = joi.object().keys({
  // active
  // expiry
  // window
})

module.exports = schema
