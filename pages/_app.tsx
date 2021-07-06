import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRef } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { ThemeProvider } from '@material-ui/core/styles'
import { LightTheme } from '@styles/themes/global'
import '@fontsource/roboto'
import FrostedGlass from '@components/FrostedGlass'
import Nav from '@components/Nav'
import { client  } from 'util/graphql-client';
import { ApolloClient,  NormalizedCacheObject } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <ApolloProvider client={client}>
      <ThemeProvider theme={LightTheme}>
        <FrostedGlass style={{minHeight: '95vh', maxHeight: '95vh', overflow: 'auto'}}>
          <Nav/>
          <Component {...pageProps} />
        </FrostedGlass>
      </ThemeProvider>
    </ApolloProvider>
  </>
}
export default MyApp
