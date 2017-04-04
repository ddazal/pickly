var http = require('http')
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('passport')
var mongoose = require('mongoose')
var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcryptjs')
var router = require('./routes')
var Student = require('./models/students')

var app = express()
var server = http.createServer(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

io.of('/dashboard').on('connection', function(socket) {
	console.log(`Usuario conectado: ${socket.id}`)
  socket.on('logout', () => {
    socket.disconnect()
  })
	socket.on('disconnect', () => console.log(`Usuario desconectado: ${socket.id}`))
})

var db = "mongodb://localhost/pickly"
mongoose.connect(db)

mongoose.connection.on('connected', () => console.log(`Connected to ${db}`))
mongoose.connection.on('error', (err) => console.log(err))

/*
var newStudent = new Student({
	id: 1,
	username: "2011203021",
	password: "2011203021",
	firstname: "David",
	lastname: "Daza",
	roles: ['admin', 'student']
})

newStudent.save()

var newStudent2 = new Student({
	id: 2,
	username: "2010103030",
	password: "2010103030",
	firstname: "Edinson",
	lastname: "Gómez"
})

newStudent2.save()

var newStudent3 = new Student({
	id: 3,
	username: "2011203035",
	password: "2011203035",
	firstname: "Cristian",
	lastname: "López"
})

newStudent3.save()

var newStudent4 = new Student({
  id: 4,
  username: "2015203015",
  password: "2015203015",
  firstname: "Sergio",
  lastname: "Garzón"
})

newStudent4.save()
*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
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
	Student.findOne({ username: username}, (err, student) => {
		
		student.comparePassword(password, (err, match) => {
			if (match) {
				return done(null, { 
					username: student.username,
					firstname: student.firstname,
					lastname: student.lastname,
					id: student.id,
					projects: student.projects,
					roles: student.roles
				})		
			} else {
				return done(null, false)
			}
		})

		if (err)
			return done(err)
		if (!student)
			return done(null, false)
	})
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