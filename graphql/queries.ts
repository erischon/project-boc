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

export const GET_ACTIVE_PROJECTS = gql`
  query Query($getActiveUserProjectsId: ID!) {
    getActiveUserProjects(id: $getActiveUserProjectsId) {
      id
      name
      description
      projectType
      client {
        id
        name
      }
      lead {
        id
        name
        email
        image
        userType
      }
    }
  }
`;
