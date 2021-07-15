import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react';

import {AppProvider} from '../components/Context';

function MyApp({ Component, pageProps }) {
 

  return (
  <AppProvider>
            <Component {...pageProps} />
  </AppProvider>
  )
    
}

export default MyApp
