const express = require('express')
const router = express.Router()
const setupDatabase = require('pickly-db')
const { Pic } = setupDatabase()

router.get('/pics', async (req, res, next) => {
  const pics = await Pic.getPics().catch(err => {
    return next(err)
  })
  res.status(200).json({ pics })
})

module.exports = router
