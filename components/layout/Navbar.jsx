import React from 'react';
import { Toggle } from './Toggle';
import Search from './Search';
import ActiveLink from '../ActiveLink/Activelink';
import { useDarkMode } from '../../theme/UseDarkMode';


function Navbar({theme, toggleTheme}) {


    console.log(theme);
    return (
        <div className="navbar py-2 px-5 shadow-md ">
            <h2 className="text-xl">Mushaf<span className="text-red-400 font-bold">.by</span></h2>
            <div className="flex w-1/4 justify-between">
                <ActiveLink activeClassName="font-bold text-red-400" href='/'>
                    <p className="cursor-pointer">Home</p>
                </ActiveLink>
                <ActiveLink activeClassName="font-bold text-red-400" href='/surah/Index'>
                    <p className="cursor-pointer">Surah</p>
                </ActiveLink>
                <p>Al-Qur'an</p>
                <p>Jadwal Sholat</p>
            </div>
            <div className="flex">
                <Search/>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </div>
    )
}

export default Navbar;
