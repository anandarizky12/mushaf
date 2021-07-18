import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

function Sidenav({ActiveLink, sideNav, toggle}) {

    return (
    <div className={`${!sideNav ? 'flex' : '-translate-x-full flex'} 
        text-xl items-center flex-col absolute transform delay-150 transition-all left-0 w-screen 
        justify-around xl:hidden sidenav  top-0 h-screen`}>
     
        <CloseIcon onClick={toggle} className="absolute top-5 right-5" fontSize="large"/>
     
        <div onClick={toggle} className="h-3/5 items-center flex flex-col justify-around">
            <ActiveLink activeClassName="font-bold text-red-400" href='/'>
                <p className="cursor-pointer">Home</p>
            </ActiveLink>
            <ActiveLink activeClassName="font-bold text-red-400" href='/surah/Index'>
                <p className="cursor-pointer">Surah</p>
            </ActiveLink>
            <p>Al-Qur'an</p>
            <p>Jadwal Sholat</p>
        </div>
    </div>
    )
}

export default Sidenav
