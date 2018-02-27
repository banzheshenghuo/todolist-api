import express from 'express'
import crypto from 'crypto'
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
    var md5Hash = crypto.createHash('md5')
    md5Hash.update(new Buffer('ZQASD', 'utf8'))
    console.log(md5Hash.digest('hex'))
    res.json({ data: { user: 'tobi' } })
})

module.exports = router
