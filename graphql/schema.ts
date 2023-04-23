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
    userType: UserType!
  }

  type Project {
    id: ID!
    manager: User
    managerId: ID!
    client: [Client]
    clientId: ID!
    name: String!
    description: String!
    projectType: ProjectType!
  }

  type Client {
    id: ID!
    user: [User!]
    projects: [Project]
  }

  enum UserType {
    CLIENT
    STAFF
    ADMIN
  }

  enum ProjectType {
    INTERNAL
    EXTERNAL
  }

  type Query {
    user(id: ID!): User
    projects(managerId: ID!): Project
    project(id: ID!): Project
  }
`;
