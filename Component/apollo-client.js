 import { ApolloClient } from 'apollo-client';
 import { InMemoryCache , IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
// import withApollo from 'next-with-apollo';
 import { createHttpLink } from 'apollo-link-http';
 import fetch from 'isomorphic-unfetch';
import introspectionQueryResultData from '../fragmentTypes.json';
import { HttpLink } from "apollo-link-http";


// whats  that fragmentMatcher read here >>  https://medium.com/@jacky_ttt/day121-warning-heuristic-fragment-matching-going-on-8208b584cb5e
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});


const cache = new InMemoryCache({ fragmentMatcher });

const link = new HttpLink({
  fetch,
  uri: "https://www.rajdeepsingh.dev/graphql",
  credentials: 'same-origin',
    fetchOptions:{
      mode: 'no-cors',
    },
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*',
    } 
});


export const client = new ApolloClient({
  cache,
  link
});

