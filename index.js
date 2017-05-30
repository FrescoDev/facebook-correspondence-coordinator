process.env.NODE_ENV = process.env.NODE_ENV || 'development'

require('babel-core/register')
require('babel-polyfill')

process.env.NODE_ENV == 'development' ? module.exports = require('./src/niobi/system.application/http.server') : module.exports = require('./build/niobi/system.application/http.server')