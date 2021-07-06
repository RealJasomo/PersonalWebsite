import { ApolloClient, createHttpLink, InMemoryCache  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const endpoint = 'https://graphql.us.fauna.com/graphql';

const httpLink = createHttpLink({
    uri: endpoint
})

const authLink = setContext((_, { headers }) => {
    const { NEXT_PUBLIC_FAUNA_CLIENT_KEY } = process.env;
    console.log(NEXT_PUBLIC_FAUNA_CLIENT_KEY);
    return {
        headers: {
            ...headers,
            authorization: `Basic ${Buffer.from( NEXT_PUBLIC_FAUNA_CLIENT_KEY ?? '').toString('base64')}`
        }
    }
});

export const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});