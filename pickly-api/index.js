const http = require('http')
const express = require('express')
const chalk = require('chalk')
const router = require('./routes')
const namespace = '[pickly:api]'

const app = express()
const port = process.env.PORT || 3000

app.use('/api', router)

app.use((err, req, res, next) => {
  console.error(`${chalk.red(namespace)} ${err.message}`)
  console.error(err.stack)
  res.status(500).json({ error: err.message })
})

const server = http.createServer(app)
server.listen(port, () => console.log(`${chalk.green(namespace)} API server running on port ${port}`))
