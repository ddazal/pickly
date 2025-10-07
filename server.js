var http = require('http')
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('passport')
var morgan = require('morgan')
var mongoose = require('mongoose')
var LocalStrategy = require('passport-local').Strategy
var router = require('./routes')
var Student = require('./models/students')

var app = express()
var server = http.createServer(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

io.of('/dashboard').on('connection', socket => {
	console.log(`Usuario conectado: ${socket.id}`)

	socket.on('set room', room => {
		socket.room = room
		socket.join(room)
	})
	
	socket.on('leave', () => socket.leave(socket.room))
	socket.on('message', data => socket.broadcast.to(socket.room).emit('render', data))
	socket.on('logout', () => socket.disconnect())
	socket.on('new xml', xml => socket.broadcast.to(socket.room).emit('rebuild workspace', xml))
	socket.on('disconnect', () =>  console.log(`Usuario desconectado: ${socket.id}`))
})

var db = process.env.MONGODB_URI || "mongodb://localhost/pickly"
mongoose.connect(db)

mongoose.connection.on('connected', () => console.log(`Connected to ${db}`))
mongoose.connection.on('error', (err) => console.log(err))

app.use(morgan('dev'))
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

		if (!student) {
			return done(null, false, { message: 'Usuario o contraseña incorrectos / Invalid username or password.' })
		}
		
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

server.on('error', (err) => {
  if (err && err.syscall === 'listen' && (err.code === 'EACCES' || err.code === 'EADDRINUSE')) {
    console.error('Fatal listen error:', err.message);
    process.exit(1);
  }
  console.error('Server error (fatal):', err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err && err.stack || err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled rejection:', reason, 'at', p);
  process.exit(1);
});

function shutdown() {
  console.log('Shutting down gracefully...');
  server.close(() => {
    // If you use Mongoose or similar, close it here:
    try {
      if (mongoose.connection && mongoose.connection.readyState !== 0) {
        return mongoose.connection.close(false, () => process.exit(0));
      }
    } catch (_) {}
    process.exit(0);
  });
  // Force-exit if it hangs
  setTimeout(() => process.exit(1), 10000).unref();
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);