import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { useDarkMode } from '../theme/UseDarkMode';
import { lightTheme, darkTheme, GlobalStyles, StyledApp } from "../theme/Theme.js";
import { ThemeProvider } from "styled-components";
import Layout from '../components/layout/Layout';
import { AppProvider } from '../components/Context';


function MyApp({ Component, pageProps }) {

  const [ theme, toggleTheme ] = useDarkMode();

  return (
  <AppProvider>

    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}> 
        <GlobalStyles />
        <StyledApp> 
            <Layout  theme={theme} toggleTheme={toggleTheme}>
                <Component {...pageProps} />
            </Layout>
        </StyledApp>
    </ThemeProvider>
      
  </AppProvider>

  )
    
}

export default MyApp
