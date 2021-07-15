import React,{useState,useEffect, useContext,createContext} from 'react';


const AppContext= createContext();

const AppProvider=({children})=>{
  //state here
  const useDarkMode = () => {
    const [ theme, setTheme ] = useState('dark');
  
    const setMode = mode => {
      window.localStorage.setItem('theme', mode);
      setTheme(mode);
    }
  
    const toggleTheme = () => {
      theme === 'dark' ? setMode('light') : setMode('dark');
    }
  
    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      localTheme ? setTheme(localTheme) : setMode('dark');
    }, []);

  
    return [ theme, toggleTheme ];
  }

    return (
        <AppContext.Provider value={{useDarkMode}} >
                {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppProvider} 