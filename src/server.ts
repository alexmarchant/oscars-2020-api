import { typeDefs, resolvers } from "./grapqhl"
import { ApolloServer } from "apollo-server"
import { User, initDB } from "./db"
import { Context } from "./interfaces"

initDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req }): Promise<Context> {
    console.log({ headers: req.headers })

    const token = req.headers.authorization?.replace("Bearer ", "")
    console.log({ token })
    if (token !== "1234") {
      console.log("no token")

      return {}
    }

    const user = await User.findOne()

    if (!user) {
      throw new Error("No user found")
    }

    return { user }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
