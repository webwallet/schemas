'use strict'

const joi = require('joi')

const addressStringSchema = require('../address/string')
const publicKeyStringSchema = require('../public-key/string')
const signatureStringSchema = require('./string')

const {config} = global
const {address, signature} = config.crypto
const addressDerivation = address.derivation
const maxPublicKeys = address.keys.items.max
const {algorithms} = signature

const schema = joi.object().keys({
  alg: joi.string().valid(algorithms).required()
    .description('digital signature algorithm'),
  wdf: joi.string().valid(addressDerivation).default(addressDerivation[0])
    .description('wallet address derivation function'),
  wid: addressStringSchema.required()
    .description('(wallet ID) source wallet address (signer)'),
  key: publicKeyStringSchema
    .description('public key for signature verification'),
  kid: joi.number().integer().min(0).max(maxPublicKeys - 1)
    .description('(key index) position in an array of public keys'),
  sig: signatureStringSchema.required()
}).or('key', 'kid')
.description('properties for describing a digital signature')

module.exports = schema
