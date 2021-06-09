import { buildSchema } from 'graphql'

const schema = buildSchema(`
    
    type adminRegister {
        id: ID!
        username: String!
        password: String!
    }

    type adminAuth {
        adminId: ID!
        token: String!
        tokenExpiration: String!
    }

    input adminInput {
        username: String!
        password: String!
    }

    type Query {
        getAdminRegister: [adminRegister]
        adminLogin(username: String! password: String!): adminAuth
    }

    type Mutation {
        createAdminRegister(AdminInput: adminInput): adminRegister
    }
`)


export default schema;