'use strict'

const joi = require('joi')

const inputOutputLockerSchema = require('../locking')
const lockerSolverObjectSchema = require('../locking/solver')

const { config, schemas } = global
const addressStringSchema = schemas.crypto.address.string
const countspaceStringSchema = schemas.crypto.countspace.string
const clearingDomainLength = config.transaction.request.iou.domain
const iouRandomStringLength = config.transaction.request.iou.random
const bigNumberStringSchemas = schemas.math.bignumber.decimal.fractional

const schema = joi.object().keys({
  domain: joi.string().trim().max(clearingDomainLength.max).required()
    .description('transaction clearing domain'),
  source: addressStringSchema.required()
    .description('source address sending the units'),
  target: addressStringSchema.required()
    .description('target address to receive the units'),

  amount: bigNumberStringSchemas.positive.required()
    .description('number of units to offset/transfer on transaction clearing'),
  credit: bigNumberStringSchemas.negative.optional()
    .description('number of units to grant as credit in the balance.min property'),
  symbol: countspaceStringSchema.required()
    .description('symbol of a unit of account (countspace identifier)'),

  random: joi.string().max(iouRandomStringLength.max).required()
    .description('random value for preventing replay attacks'),
  active: joi.date().iso().optional().options({convert: true})
    .description('date when the IOU becomes active for clearing'),
  expiry: joi.date().iso().required().options({convert: true})
    .description('latest valid date for clearing the IOU'),

  locker: inputOutputLockerSchema.optional()
    .description('locking properties to restrict output clearing'),
  solver: lockerSolverObjectSchema.optional()
    .description('input properties for solving output lockings')
})

module.exports = schema
