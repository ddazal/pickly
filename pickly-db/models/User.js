const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const ProjectModel = require('./Project')
const Schema = mongoose.Schema

const UserSchema = new Schema({
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
      ref: 'ProjectModel'
    }
  ]
})

UserSchema.plugin(uniqueValidator)

UserSchema.virtual('fullname').get(function () {
  const fullname = `${this.firstname} ${this.lastname}`
  return fullname
})

module.exports = mongoose.model('UserModel', UserSchema)
