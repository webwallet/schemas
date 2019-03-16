'use strict'

const joi = require('joi')

const config = require('*joi/config')
const publicKeyStringSchema = require('*joi/crypto/keys/public/string')
const validDigitalSignatureSchemes = require('*joi/crypto/signature/schemes')
const signatureScriptIdentifierSchema = require('*joi/crypto/hash/string')
const addressStringSchema = require('../address/string')
const signatureStringSchema = require('./string')

const addressDerivation = config.crypto.address.derivation

const schema = joi.object().keys({
  scheme: validDigitalSignatureSchemes.required()
    .description('digital signature scheme (algorithm-curve)'),
  signer: addressStringSchema.required()
    .description('wallet address providing the signature'),
  string: signatureStringSchema.required()
    .description('digital signature string value in hex format'),
  public: publicKeyStringSchema.required()
    .description('public key for signature verification'),
  script: signatureScriptIdentifierSchema.optional()
    .description('script containing rules for transaction clearing'),
  linker: joi.string().valid(addressDerivation).default('?')
    .description('derivation function that relates public/script to signer')
}).description('properties for describing a digital signature')

module.exports = schema
