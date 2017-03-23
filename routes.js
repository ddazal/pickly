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
	var status = req.isAuthenticated ? req.user : undefined
	res.send(status)
})

router.get('/students', justForAdmin, (req, res) => {
	Student.find({}, null, {sort: { id: -1 }}, (err, students) => {
		if (err)
			return res.json(err)
		res.status(200).json(students)
	})
})

router.post('/max', justForAdmin, (req, res) => {
	Student.find({}).sort({ id: -1 }).limit(1).exec(function(err, student) {
		if (err)
			return res.json(err)
		res.status(200).json(student)
	})
})

router.post('/student', justForAdmin, (req, res) => {
	var newStudent = new Student()

	newStudent.id = req.body.id
	newStudent.username = req.body.username
	newStudent.password = req.body.password
	newStudent.firstname = req.body.firstname
	newStudent.lastname = req.body.lastname

	if (req.body.admin)
		newStudent.roles = ['admin', 'student']

	newStudent.save(err => {
		if (err)
			return res.status(500).json(err)
		res.sendStatus(200)
	})
})

router.post('/createProject', (req, res) => {
	var family = 'p' + req.body.pic.slice(3, 5)
	var url = '/' + family + '/' + req.body.pic.toLowerCase()
	newProject = { name: req.body.name, pic: req.body.pic, url: url }
	Student.findOneAndUpdate({ id: req.body.userId }, { $push: { projects: newProject }}, { new:true }, (err, student) => {
		if (err)
			return res.status(500)
		res.status(200).json({ id: student.id, firstname: student.firstname, lastname: student.lastname, project: newProject })
	})
})

router.post('/saveProject', (req, res) => {
	Student.findOne({ id: req.body.id }, (err, student) => {
		if (err)
			return console.log(err)
		student.projects.map((obj) => {
			if (obj.name === req.body.project) {
				obj.xml = req.body.xml
				student.save(err => {
					if (err)
						return console.log(err)
					console.log('DONE')
				})
			}
		})
	})
})

router.post('/deleteProject', (req, res) => {
	Student.findOneAndUpdate(
		{ id: req.body.userId}, 
		{ $pull: { projects: { _id: req.body._id }}}, (err, doc) => {
			if (err)
				res.status(500).end()
			res.status(200).end()
		})
})

router.post('/projects', (req, res) => {
	Student.findOne({ id: req.body.id }, (err, student) => {
		if (err)
			return res.status(500)
		res.status(200).json(student.projects)
	})
})


function justForAdmin(req, res, next) {
	if (req.isAuthenticated && req.user.roles[0] === 'admin')
		return next()
	return res.status(403).redirect('/forbidden')
}

module.exports = router