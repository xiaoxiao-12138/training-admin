'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://120.25.144.146:8888"',
  OSS_PATH: '"http://hsunnyc.oss-cn-beijing.aliyuncs.com"'
})
