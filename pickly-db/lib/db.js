const chalk = require('chalk')
const mongoose = require('mongoose')
const uri = process.env.MONGO_URI || 'mongodb://localhost/pickly'
const namespace = '[pickly:db]'

mongoose.Promise = global.Promise

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect(uri)
      console.log(`${chalk.green(namespace)} Succesfully connected to db`)
    } catch (err) {
      console.error(`${chalk.red(namespace)} ${err.message}`)
      process.exit(1)
    }
  }
}
