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
    name: String!
    description: String!
    projectType: ProjectType!
    active: Boolean!
    createdAt: String!
    updatedAt: String!
    clientId: ID!
    leadId: ID!
    lead: User
    client: Client
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String
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
    getActiveUserProjects(id: ID!): [Project]
  }
`;
