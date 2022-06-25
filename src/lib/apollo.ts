import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ovt3vf1eo301xlgn7u6pgi/master',
  cache: new InMemoryCache()
});