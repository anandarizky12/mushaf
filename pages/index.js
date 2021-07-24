import Head from 'next/head';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import RandomQuotes from '../components/Quotes/RandomQuotes';


export default function Home({theme}) {


  return (
          <div>
              <Head>
                <title>Mushaf Online</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <Jumbotron/>
              {/* <RandomQuotes/> */}
    
          </div>  
  )
}
