import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@material-ui/core/styles'
import { LightTheme } from '@styles/themes/global'
import '@fontsource/roboto'
import FrostedGlass from '@components/FrostedGlass'
import Nav from '@components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={LightTheme}>
      <FrostedGlass style={{minHeight: '80vh'}}>
        <Nav/>
        <Component {...pageProps} />
      </FrostedGlass>
    </ThemeProvider>
  </>
}
export default MyApp
