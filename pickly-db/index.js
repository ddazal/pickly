const db = require('./lib/db')
const Pic = require('./models/Pic')
const setupPic = require('./lib/pic')

module.exports = () => {
  db.connect()
  const pic = setupPic(Pic)
  // Handle error
  return {
    pic
  }
}
