import React from 'react';
import { Toggle } from './Toggle';
import ActiveLink from '../ActiveLink/Activelink';
import MenuIcon from '@material-ui/icons/Menu';
import { UseGlobalContext } from '../Context';
import Sidenav from './Sidenav';
import { List } from './List';


function Navbar({theme, toggleTheme}) {

    const {toggleSideNav, sideNav} = UseGlobalContext();

  
    return (
        <div className="navbar py-5 px-5 shadow-sm ">
            <h2 className="text-xl">Mushaf<span className="text-red-400 font-bold">.by</span></h2>
            <div className={`hidden w-1/4 justify-between xl:flex`}>
                {List.map(data=>(
                    <ActiveLink activeClassName="font-bold text-red-400" href={data.link}>
                        <p className="cursor-pointer">{data.nama}</p>
                    </ActiveLink>
                ))}
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
