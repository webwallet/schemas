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
  derive: joi.string().valid(addressDerivation).default(addressDerivation[0])
    .description('wallet address derivation function'),
  wallet: addressStringSchema.required()
    .description('wallet address providing the signature'),
  public: publicKeyStringSchema
    .description('public key for signature verification'),
  keypos: joi.number().integer().min(0).max(maxPublicKeys - 1)
    .description('position in an array of public keys'),
  string: signatureStringSchema.required()
}).or('public', 'keypos')
.description('properties for describing a digital signature')

module.exports = schema
