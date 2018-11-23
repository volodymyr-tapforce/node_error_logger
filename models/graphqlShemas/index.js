import { gql } from 'apollo-server-express';
import errorSchema from './errors';
import userSchema from './users';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [errorSchema,userSchema,linkSchema];