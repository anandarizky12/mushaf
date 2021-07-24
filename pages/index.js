import Head from 'next/head';
import Jumbotron from '../components/Jumbotron/Jumbotron';

export default function Home({theme}) {


  return (
          <div>
              <Head>
                <title>Mushaf Online</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <Jumbotron/>
            
    
          </div>  
  )
}
