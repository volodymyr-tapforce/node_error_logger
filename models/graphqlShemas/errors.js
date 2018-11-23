import { gql } from 'apollo-server-express';

export default gql`

  type Error {
    anonymusId: String!
    err_type: String!
    err_message: String!
    createdAt: Date!
  }

  extend type Mutation {
    createError(anonymusId: String!,err_type: String!,err_message: String!): Error!
  }

`;
