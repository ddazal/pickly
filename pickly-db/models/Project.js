const mongoose = require('mongoose')
const PicModel = require('./Pic')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  name: {
    type: String
  },
  admin: {
    type: Boolean
  },
  xml: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  pic: {
    type: Schema.Types.ObjectId,
    ref: 'PicModel'
  }
})

module.exports = mongoose.model('Project', ProjectSchema)
