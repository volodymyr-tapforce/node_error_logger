import { gql } from 'apollo-server-express';

export default gql`

  type Error {
    anonymusId: String!
    err_type: String!
    err_message: String!
    createdAt: Date!
  }

  type ErrorConnection {
    edges: [Error!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  extend type Mutation {
    createError(anonymusId: String!,err_type: String!,err_message: String!, userParams:UserParams): Error!
  }

  extend type Query{
    errors (cursor: String, limit: Int): ErrorConnection!
  }
`;
