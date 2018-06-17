const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const PicSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  family: {
    type: String,
    required: true
  }
})

PicSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Pic', PicSchema)
