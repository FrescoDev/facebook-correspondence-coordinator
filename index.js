require('babel-core/register');
require('babel-polyfill');
require('./build/app/server');

module.exports = require('./build/app/server');