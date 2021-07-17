import React, { useState, useEffect, useContext,  createContext } from 'react';
import axios from 'axios';


const AppContext= createContext();

const AppProvider=({children})=>{
  
  //sidenav
  const [sideNav, setSideNav] = useState('false');

  const toggleSideNav = () => {
    setSideNav(!sideNav);
  }
  //Untuk Get Random Quotes
  const [randomQuotes, setRandomQuotes] = useState('');

  const getRandomQuotes=()=>{
      axios.get('https://islamic-api-indonesia.herokuapp.com/api/data/quotes')
        .then(res=>{
          setRandomQuotes(res.data.result) 
        });
  }


  //end
  //get Surah Al quran 

  const [surah, setsurah] = useState([]);
  const getSurah = () => {
    axios.get("https://islamic-api-indonesia.herokuapp.com/api/data/json/quran")
      .then(res=>{
        setsurah(res);
      })
  }

  useEffect(()=>{
    getRandomQuotes();
    getSurah();
  },[]);


    return (
        <AppContext.Provider value={{ getRandomQuotes, randomQuotes, getSurah , surah, setsurah,  toggleSideNav, sideNav}}>
                {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppProvider} 