var http = require('http')
var path = require('path')
var express = require('express')
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
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cookieParser())
app.use(session({
	name: 'session',
	secret: '53kre7',
	resave: false,
	saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)

passport.use(new LocalStrategy((username, password, done) => {
	if (username === password)
		return done(null, { username: username })
	return done(null, false)
}))

passport.serializeUser((user, done) => {
	done(null, user)
})
passport.deserializeUser((user, done) => {
	done(null, user)
})

server.listen(port, (err) => {
	if (err)
		res.send(err)
	console.log(`http://localhost:${port}/`)
})