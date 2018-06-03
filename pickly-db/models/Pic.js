const mongoose = require('mongoose')
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

module.exports = mongoose.model('Pic', PicSchema)
