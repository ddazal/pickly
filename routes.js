var express = require('express')
var router = express.Router()
var path = require('path')
var bodyParser = require('body-parser')
var passport = require('passport')
var Student = require('./models/students')

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/login', (req, res) => {
	if (req.isAuthenticated) 
		res.redirect('/dashboard')
	else
		res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/p16/:id', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/p18/:id', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/error', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/dashboard', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/logout', (req, res) => {
	req.logout()
	res.sendStatus(200)
})

router.post('/login', passport.authenticate('local'), (req, res)  => {
	res.status(200).json(req.user)
})

router.get('/forbidden', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/check', (req, res)  => {
	let status = req.isAuthenticated ? req.user : undefined
	res.send(status)
})

router.get('/get/students', justForAdmin, (req, res) => {
	Student.find({}, (err, students) => {
		if (err)
			return res.json(err)
		res.json(students)
	})
})

function justForAdmin(req, res, next) {
	if (req.isAuthenticated && req.user.roles[0] === 'admin')
		return next()
	return res.status(403).redirect('/forbidden')
}

module.exports = router