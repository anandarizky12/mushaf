import React from 'react';
import { Toggle } from './Toggle';
import ActiveLink from '../ActiveLink/Activelink';
import MenuIcon from '@material-ui/icons/Menu';
import { UseGlobalContext } from '../Context';
import Sidenav from './Sidenav';

function Navbar({theme, toggleTheme}) {

    const {toggleSideNav, sideNav} = UseGlobalContext();

    console.log(sideNav);
    return (
        <div className="navbar py-2 px-5 shadow-md ">
            <h2 className="text-xl">Mushaf<span className="text-red-400 font-bold">.by</span></h2>
            <div className={`hidden w-1/4 justify-between xl:flex`}>
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
                {/* <Search/> */}
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <div className="flex items-center xl:hidden">
                    <MenuIcon onClick={toggleSideNav} className="cursor-pointer hidden"/>
                </div>
            </div>
            <Sidenav ActiveLink={ActiveLink} toggle={toggleSideNav} sideNav={sideNav}/>
        </div>
    )
}

export default Navbar;
