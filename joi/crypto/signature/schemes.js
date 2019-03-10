'use strict'

const joi = require('joi')

const { config } = global
const digitalSignatureSchemes = config.crypto.signature.schemes

const scheme = joi.string().valid(digitalSignatureSchemes)
  .description('valid digital signature schemes (algorithm-curve)')

module.exports = scheme
