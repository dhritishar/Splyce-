const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User { 
    _id: ID
    firstName: String
    lastName: String
  }

  type Query {
    users: [User]!
    user(userID: ID!): User
  }

  type Mutation {
    addUser(fisrtName: String!, lastName: String!): User
    removeUser(userID: ID!): User
    updateUser(userID: ID!): User
  }
`;

module.exports = typeDefs;
