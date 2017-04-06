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
  if (req.isAuthenticated()) 
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

router.get('/dashboard', protect, (req, res) => {
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
  Student.find({}).sort({ id: -1 }).limit(1).exec(function (err, student) {
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

router.post('/create-project', (req, res) => {
  var family = 'p' + req.body.pic.slice(3, 5)
  var url = '/' + family + '/' + req.body.pic.toLowerCase()
  newProject = { name: req.body.name, pic: req.body.pic, url: url, role: req.body.role }
  Student.findOneAndUpdate({ id: req.body.userId }, { $push: { projects: newProject }}, { new:true }, (err, student) => {
    if (err)
      return res.status(500)
    var _projects = student.projects.sort((a, b) => {
      if (a._id > b._id)
        return -1
      if (a._id < b._id)
        return 1
      return 0
    })
    res.status(200).json({ id: student.id, firstname: student.firstname, lastname: student.lastname, project: _projects[0] })
  })
})

router.post('/save-project', (req, res) => {
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

router.post('/delete-project', (req, res) => {
  let contributors = req.body.contributors
  if (req.body.role === 'admin') {
    contributors.map(contributor => {
      Student.findOneAndUpdate(
        { username: contributor.username}, 
        { $pull: { projects: { _id: req.body._id }}},
        { new: true}, 
        (err, doc) => handleErr(err)
      )   
    })
    Student.findOneAndUpdate(
      { id: req.body.userId}, 
      { $pull: { projects: { _id: req.body._id }}},
      { new: true}, (err, doc) => {
        handleErr(err)
        res.status(200).end()
      }
    )
  } else {
    contributors.map(contributor => {
      let others = contributors.filter(obj => {
        if(contributor.username == obj.username)
          return false
        return true
      })

      Student.findOne({ username: contributor.username}, { roles: 0, projects: { $elemMatch: { _id: req.body._id }}}, (err, data) => {
        handleErr(err)
        data.projects[0].contributors = others
        data.save(err => handleErr(err))
      })
    })

    Student.findOneAndUpdate(
      { id: req.body.userId}, 
      { $pull: { projects: { _id: req.body._id }}},
      { new: true}, (err, doc) => {
        handleErr(err)
        res.status(200).end()
      }
    )
  }
})

router.post('/projects', (req, res) => {
  Student.findOne({ id: req.body.id }, (err, student) => {
    if (err)
      return res.status(500)
    res.status(200).json(student.projects)
  })
})

router.post('/change-password', (req, res) => {
  Student.findOne({ id: req.body.id }, (err, student) => {
    if (err) 
      return console.log(err)
    student.password = req.body.new
    student.save(err => {
      if (err)
        return console.log(err)
      res.status(200).end()
    })
  })  
})

router.post('/search-contributor', (req, res) => {
  var contributor = req.body.code
  if (contributor === req.body.me) {
    return res.status(409).json()
  }
  Student.findOne({ username: contributor }, (err, student) => {
    if (err || !student)
      return res.status(500).json()
    res.status(200).json({ fullname: student.firstname + ' ' + student.lastname, username: student.username})
  })
})

router.post('/save-contributor', (req, res) => {
  var project = req.body.project
  project.role = 'colaborador'
  var contributors = req.body.contributors
  var me = req.body.me
  var oldContributors

  Student.findOne({ id: me.id }, { roles: 0, projects: { $elemMatch: { _id: project._id }}}, (err, data) => {
    handleErr(err)
    oldContributors = data.projects[0].contributors.slice()
    contributors.map(contributor => data.projects[0].contributors.push(contributor))
    data.save(err => handleErr(err))

    if (oldContributors.length) {
      oldContributors.map(old => {
        Student.findOne({ username: old.username }, { roles: 0, projects: { $elemMatch: { _id: project._id }}}, (err, data) => {
          handleErr(err)
          contributors.map(contributor => data.projects[0].contributors.push(contributor))
          data.save(err => handleErr(err))
        })
      })
    }

    contributors.map(contributor => {
      var newContributors = contributors.filter(function (obj) {
        if (obj.username === contributor.username) {
          return false
        } else {
          return true
        }
      })
      newContributors.push(me)
      oldContributors.map(old => newContributors.push(old))
      project.contributors = newContributors

      Student.findOneAndUpdate(
        { username: contributor.username },
        { $addToSet: { projects: project }},
        (err, student) => {
          if (err)
            return res.status(500).json()
        }
      )
    })
  })

  res.status(200).json()
})

function justForAdmin (req, res, next) {
  if (req.isAuthenticated() && req.user.roles[0] === 'admin')
    return next()
  return res.status(403).redirect('/forbidden')
}

function protect (req, res, next) {
  if (req.isAuthenticated())
    return next()
  res.redirect('/login')
}

function handleErr(err) {
  if (err)
    return res.status(500).json()
}

module.exports = router