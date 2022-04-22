import {gql} from 'apollo-server-express'

const typeDefs = gql`
    type Project {
        id: ID!
        name: String!
        link: String!
    }

    type Query {
        welcome: String
        projects: [Project!]!
        project(id: ID!): Project
    }
`

export {typeDefs}