import React, {useState} from 'react';
import { UseGlobalContext } from '../Context';
import CardRandomSkeleton from '../Skeleton/CardRandomSkeleton';

function RandomQuotes() {

    const {randomQuotes} = UseGlobalContext();

    console.log(randomQuotes);
    
    if(!randomQuotes) return <CardRandomSkeleton/>
    return (
    <div className="randomCard w-full items-center flex justify-start h-72 shadow-sm my-2">
            <div className="bg-quran-bg w-3/6 h-full bg-center bg-cover"/>
            <div className="ml-5">
                    <p className="font-bold text-2xl my-5">Random Quotes</p>
                    <p className="text-md w-11/12">{randomQuotes.text_id}</p>
            </div>
    </div>
    )
}

export default RandomQuotes
