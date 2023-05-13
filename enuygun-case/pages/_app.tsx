import { ApolloClient, ApolloProvider } from "@apollo/client";
import client from "../apollo/apolloClient";
// import '../styles/main.scss';
// import '../styles/details.scss';

require('../styles/details.scss');
require('../styles/main.scss');

import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
