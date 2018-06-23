const bodyParser = require('body-parser')
const chalk = require('chalk')
const express = require('express')
const http = require('http')
const schema = require('./schemas/schema')
const setupDatabase = require('pickly-db')
const { Pic } = setupDatabase()
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const namespace = '[pickly:api]'
const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Pic } }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.use((err, req, res, next) => {
  console.error(`${chalk.red(namespace)} ${err.message}`)
  console.error(err.stack)
  res.status(500).json({ error: err.message })
})

const server = http.createServer(app)
server.listen(port, () => console.log(`${chalk.green(namespace)} API server running on port ${port}`))
