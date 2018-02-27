require('babel-core/register')

require('babel-core').transform('code', {
    plugins: ['transform-runtime']
})
module.exports = require('./app.js')
