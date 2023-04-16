import { gql } from "graphql-tag";

/**
 *  Define type definitions.
 */
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    image: String
    userType: String!
  }

  type Query {
    user(id: ID!): User
  }
`;
