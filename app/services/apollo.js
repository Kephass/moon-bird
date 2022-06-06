import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(JSON.stringify(graphQLErrors));
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const timeStartLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: Date.now() });
  return forward(operation);
});

const logTimeLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    // data from a previous link
    const time = Date.now() - operation.getContext().start;

    console.log(`operation ${operation.operationName} took ${time} milliseconds to complete`);
    return data;
  });
});

// use your development machine ip address
const httpLink = createHttpLink({
  uri: 'http://192.168.0.227:4000/',
});

const link = ApolloLink.from([timeStartLink, logTimeLink, errorLink, httpLink]);

const cache = new InMemoryCache({});

export const client = new ApolloClient({
  cache,
  link,
});

export default client;
