const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI || 'mongodb://localhost/pickly'

mongoose.Promise = global.Promise

module.exports = {
  connect: async () => {
    await mongoose.connect(uri)
  }
}
