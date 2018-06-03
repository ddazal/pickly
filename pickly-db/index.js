const db = require('./lib/db')
const PicModel = require('./models/Pic')
const setupPic = require('./lib/pic')

module.exports = function setupDatabase () {
  db.connect()
  const Pic = setupPic(PicModel)

  return {
    Pic
  }
}
