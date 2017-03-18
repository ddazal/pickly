var express = require('express')
var router = express.Router()
var path = require('path')
var bodyParser = require('body-parser')
var passport = require('passport')

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/login', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/p16/:id', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/p18/:id', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/error', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/dashboard', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/logout', function (req, res) {
	req.logout()
	res.sendStatus(200)
})

router.post('/login', passport.authenticate('local'), function(req, res) {
	res.status(200).json(req.user)
})

router.get('/check', function(req, res) {
	let status = req.isAuthenticated ? req.user : undefined
	console.log(status)
	res.send(status)
})

module.exports = router