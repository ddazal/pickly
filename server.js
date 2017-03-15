var http = require('http')
var express = require('express')
var router = require('./routes')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()
var server = http.createServer(app)
var port = process.env.PORT || 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)

server.listen(port, function (err) {
	if (err)
		res.send(err)
	console.log(`http://localhost:${port}/`)
})