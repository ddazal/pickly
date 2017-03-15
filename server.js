var http = require('http')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var router = require('./routes')

var app = express()
var server = http.createServer(app)
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
	secret: 'evmp',
	resave: false,
	saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)

server.listen(port, function (err) {
	if (err)
		res.send(err)
	console.log(`http://localhost:${port}/`)
})