import { gql } from 'apollo-server-express';

export default gql`

  type User {
    anonymusId: ID!
    err_type: String!
    err_message: User!
    createdAt: Date!
  }

`;
