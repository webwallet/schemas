'use strict'

const joi = require('joi')

const addressStringSchema = require('../address/string')
const publicKeyStringSchema = require('../public-key/string')
const signatureStringSchema = require('./string')

const {config} = global
const {address, signature} = config.crypto
const addressDerivation = address.derivation
const maxPublicKeys = address.keys.array.max
const {algorithms} = signature

const schema = joi.object().keys({
  scheme: joi.string().valid(algorithms).required()
    .description('digital signature algorithm'),
  signer: addressStringSchema.required()
    .description('wallet address providing the signature'),
  string: signatureStringSchema.required()
    .description('digital signature string value in hex format'),

  public: publicKeyStringSchema
    .description('public key for signature verification'),
  keypos: joi.number().integer().min(0).max(maxPublicKeys - 1)
    .description('position in an array of public keys'),
  linker: joi.string().valid(addressDerivation).default(addressDerivation[0])
    .description('address derivation function for linking to the public key')
}).or('public', 'keypos')
.description('properties for describing a digital signature')

module.exports = schema
