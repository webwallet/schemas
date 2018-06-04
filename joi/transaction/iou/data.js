'use strict'

const joi = require('joi')

const {config, schemas} = global
const addressStringSchema = schemas.crypto.address.string
const countspaceStringSchema = schemas.crypto.countspace.string
const issuerDomainLength = config.transaction.request.iou.domain
const iouNonceLength = config.transaction.request.iou.nonce
const bigNumberStringSchemas = schemas.math.bignumber.decimal.fractional

const schema = joi.object().keys({
  iss: joi.string().max(issuerDomainLength.max).required()
    .description('(issuer) transaction clearing domain'),
  sub: addressStringSchema.required()
    .description('(subject) source of the transaction'),
  aud: addressStringSchema.required()
    .description('(audience) destination of the transaction'),

  amt: bigNumberStringSchemas.positive.required()
    .description('(amount) number of units to offset on clearing'),
  alw: bigNumberStringSchemas.negative
    .description('(allowance) number of units to grant as credit'),
  cru: countspaceStringSchema.required()
    .description('(unit of account) cryptographic countspace identifier'),
  nce: joi.string().max(iouNonceLength.max).required()
    .description('(nonce) random value to prevent replay attacks'),

  iat: joi.date().iso().max('now').options({convert: true})
    .description('(issued at) for reference purpose only'),
  nbf: joi.date().iso().options({convert: true})
    .description('(not before) earliest valid date for clearing'),
  exp: joi.date().iso().required().options({convert: true})
    .description('(expires) latest valid date for clearing')
})

module.exports = schema
