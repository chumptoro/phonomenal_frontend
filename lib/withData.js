// explanation of theis file: https://courses.wesbos.com/account/access/5f1a220d13180209c92ce114/view/289541395 minute 2

//give us a component that exposes apollo client via a prop
import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

//endpoint is our localhost:4444 (see config.js) , which connects us to the graphQL yoga server so we can make queries and mutations!
import { endpoint, prodEndpoint } from '../config';

//takes headers and return the client


function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    //managing and persisting state of components using Apollo Client
    clientState: {
      defaults: {
        delivery_address: "",
        delivery_method:"",
        unique_identifier:"",
        menu_tab:"",
        cartOpen: true,

      },
      resolvers: {

      },
    }
  });
}

export default withApollo(createClient);
