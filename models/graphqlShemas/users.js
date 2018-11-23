import { gql } from 'apollo-server-express';

export default gql`

  type User {
    anonymusId: String!
    user_id: String!
    email: String!
    created_at: Date!
    lastErrorTime: Date!
  }

  input UserParams{
    user_id: String
    email: String
  }
`;
