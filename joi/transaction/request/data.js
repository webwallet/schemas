'use strict'

const joi = require('joi')

const transactionRequestInputsArraySchema = require('./inputs')

const schema = joi.object().keys({
  inputs: transactionRequestInputsArraySchema.required()
    .description('set of instructions to be executed in the transaction')
}).description('transaction request data object')

module.exports = schema
