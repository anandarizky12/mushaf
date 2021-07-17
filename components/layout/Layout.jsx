import React from 'react'
import Navbar from "./Navbar";
import {UseGlobalContext} from '../Context';

function Layout({children, theme, toggleTheme}) {

    console.log(theme)
    return (
        <div className='layout'>
            <Navbar  theme={theme} toggleTheme={toggleTheme}  />
            {children}
        </div>
    )
}

export default Layout
