'use strict'

const joi = require('joi')

const { config } = global

const { min: hasheeMin, max: hasheeMax} =
  config.transaction.request.iou.solver.hashee

const schema = joi.object().keys({
  hashee: joi.string().min(hasheeMin).max(hasheeMax).optional()
    .description('preimage of an output hashlock'),
  // params:
  //   .description('parameters for an output script')
})

module.exports = schema
