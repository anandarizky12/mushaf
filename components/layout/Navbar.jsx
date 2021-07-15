import React from 'react';
import { Toggle } from './Toggle';


function Navbar({theme, toggleTheme}) {
   
  
    return (
        <div className="navbar py-2">
            <h2 className="text-xl">Mushaf<span className="text-red-400 font-bold">.by</span></h2>
            <div className="flex">
                <div>
                    <input type="text"/>
                </div>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </div>
    )
}

export default Navbar;
