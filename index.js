require('babel-core/register');
require('babel-polyfill');
require('./build/app/server');

process.env.NODE_ENV == 'dev'  ? module.exports = require('./app/server') : module.exports = require('./build/app/server');