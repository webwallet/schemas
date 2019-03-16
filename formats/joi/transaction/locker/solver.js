'use strict'

const joi = require('joi')

const config = require('*joi/config')

const hashee = config.transaction.request.iou.solver.hashee

const schema = joi.object().keys({
  hashee: joi.string().min(hashee.min).max(hashee.max).optional()
    .description('preimage of an output hashlock'),
  // params:
  //   .description('parameters for an output script')
})

module.exports = schema
