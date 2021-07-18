import React from 'react';
import { Divider } from '@material-ui/core';
import Link from 'next/link';

function SearchCardResult({id, name, ayatL}) {
    return (

        <Link href={`/surah/${id}`}>
            <div className="cursor-pointer hover:text-gray-400 text-sm p-1 w-full h-12">
                <p className="mb-1">{name} ({ayatL})</p>
                <Divider className="text-white"/>
            </div>
        </Link>
    )
}

export default SearchCardResult
