import React from 'react'
import Navbar from "./Navbar";


function Layout({ toggleTheme, theme,children}) {
    return (
        <div className='layout'>
            <Navbar  theme={theme} toggleTheme={toggleTheme}  />
            {children}
        </div>
    )
}

export default Layout
