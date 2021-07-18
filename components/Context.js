import React, { useState, useEffect, useContext,  createContext } from 'react';
import axios from 'axios';


const AppContext= createContext();

const AppProvider=({children})=>{
  

  //hanlde outside click 
  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };
  
  //fungsi cari
  const [cari, setcari] = useState('');
  const [open, setopen ] = useState(false);
  const ref = React.useRef();

  useOutsideClick(ref, () => {
    setopen(false);
    setcari("");
  });

  function handleCari(e){
    e.preventDefault();
    setcari(e.target.value);
  };


  const filteredSurah = (surah) => {
    if(cari){
      setopen(true);
      return surah.data.result.data.filter(verses=>{
      return verses.name.transliteration.id.toLowerCase().includes(cari.toLowerCase())});
    }
  };


  //sidenav
  const [sideNav, setSideNav] = useState('true');

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

//   window.onkeydown = function(e){
//     if(e.target.name.toLowerCase() === 'input'){
//         return ;
//     }
//     alert('a');
// };

  useEffect(()=>{
    getRandomQuotes();
    getSurah();
  },[]);


    return (
        <AppContext.Provider value={{ getRandomQuotes, randomQuotes, getSurah , 
                                      surah, setsurah,  toggleSideNav, sideNav
                                      , handleCari, cari, filteredSurah,setcari, open, ref }}>
                {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppProvider} 