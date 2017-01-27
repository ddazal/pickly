var express = require('express')
var app = express()
var router = require('./routes')

var port = process.env.PORT || 8080

app.use(express.static('public'))
app.use('/', router)

app.listen(port, function (err) {
	if (err)
		res.send(err)
	console.log('Servidor iniciado en puerto ' + port)
})