import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      image
      userType
    }
  }
`;

export const GET_PROJECTS = gql`
  query Query($managerId: ID!) {
    projects(managerId: $managerId) {
      description
      id
      clientId
      managerId
      name
      projectType
    }
  }
`;
