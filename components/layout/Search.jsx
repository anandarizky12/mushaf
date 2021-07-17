import React from 'react'
import { FaSearch } from 'react-icons/fa';
function Search() {
    return (
            <div className="flex items-center">
                <FaSearch className="absolute text-xl m-2"/>
                <input className="pl-12  mr-2" type="text " placeholder="Search"/>
            </div>
    )
}

export default Search
