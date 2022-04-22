import express from 'express'
import {ApolloServer, gql} from 'apollo-server-express'
import {typeDefs} from './typesDefs.js'
import {resolvers} from './resolvers.js'


const initServer = async () => {
    const app = express()
    const server = new ApolloServer({typeDefs, resolvers})
    await server.start()
    server.applyMiddleware({ app })
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
        console.log(`Server running on PORT : ${PORT}`)
    })
}

initServer()