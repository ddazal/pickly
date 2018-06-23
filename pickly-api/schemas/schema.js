const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Query { pics: [Pic] }
  type Pic { id: ID, name: String, family: String }
`

const resolvers = {
  Query: { pics: async (_, args, { Pic }) => Pic.getPics() }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema
