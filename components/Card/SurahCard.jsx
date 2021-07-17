import React from 'react'
import Link from 'next/link'

function SurahCard({ shortAr, name, ayatL, indName, number}) {
    return (
    <Link href={`/surah/${number}`}>
        <div className="cursor-pointer hover:bg-red-500 border-2 border-gray-200 p-2 w-52 flex flex-row ">
            <div className="text-xs px-2">
                {number}
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="text-xs">
                    <p className="font-bold">{name} ({ayatL})</p>
                    <p >{indName}</p>
                </div>
                <div className="">
                    {shortAr}
                </div>
            </div>
            
        </div>
        </Link>
    )
}

export default SurahCard
