import { typeDefs, resolvers } from "./grapqhl"
import { ApolloServer } from "apollo-server"
import { User, initDB } from "./db"
import { Context } from "./interfaces"

initDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req }): Promise<Context> {
    const token = req.headers.authorization?.replace("Bearer ", "")
    if (token !== "1234") {
      return {}
    }

    const user = await User.findOne()
    return { user }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
