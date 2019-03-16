'use strict'

const joi = require('joi')

const publicKeyStringSchema = require('*joi/crypto/keys/public/string')
const validDigitalSignatureSchemes = require('*joi/crypto/signature/schemes')

const schema = joi.object().keys({
  scheme: validDigitalSignatureSchemes.required(),
  public: publicKeyStringSchema.required(),
  weight: joi.number().integer().positive().optional()
}).description('properties related to a public key in a multikey address')

module.exports = schema
