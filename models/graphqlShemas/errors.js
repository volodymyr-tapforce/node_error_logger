import { gql } from 'apollo-server-express';

export default gql`

  type Error {
    anonymusId: ID!
    err_type: String!
    err_message: User!
    createdAt: Date!
  }

  extend type Mutation {
    createError(anonymusId: String!,err_type: String!,err_message: String!): Error!
  }

`;
