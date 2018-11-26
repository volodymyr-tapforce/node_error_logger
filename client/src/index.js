import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { ApolloProvider, withApollo } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const localUrl = 'http://localhost:8000/graphql';
const cache = new InMemoryCache();

const AppWithClient = withApollo(App);


const httpLink = new HttpLink({
  uri: localUrl,
  // headers: {
  //   authorization: `Bearer ${
  //     process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
  //   }`,
  // },
});
const client = new ApolloClient({
  link: httpLink,
  cache,
});



ReactDOM.render(      
    <ApolloProvider client={client}>
        <AppWithClient />
    </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
