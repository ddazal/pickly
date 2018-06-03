const mongoose = require('mongoose')
const Project = require('./Project')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
  admin: {
    type: Boolean
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project'
    }
  ]
})

UserSchema.virtual('fullname').get(function () {
  const fullname = `${this.firstname} ${this.lastname}`
  return fullname
})

module.exports = mongoose.model('Student', StudentSchema)
