var express = require('express')
var router = express.Router()
var path = require('path')
var bodyParser = require('body-parser')

router.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.post('/login', function (req, res) {
	let username = req.body.username
	let password = req.body.password
	if (username === password)
		res.json({ failed: false })
	else
		res.json({ failed: true})
})

module.exports = router