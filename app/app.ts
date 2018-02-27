
var express = require('express')
var path = require('path')
// var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var users = require('./routes/users')

var app = express()

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req:any, res:any, next:any){
    res.header('Access-Control-Allow-Origin', '*')
    // 不限制访问源
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    // 接收访问方法
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    //发送客户端请求为json
    next()
})

app.use('/', index)
app.use('/users', users)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    // err.status = 404
    next(err)
})

// error handler
app.use(function(err:any, req:any, res:any, next:any) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
