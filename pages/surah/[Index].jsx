import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { UseGlobalContext } from '../../components/Context';
import { versionAliases } from 'browserslist';


function SurahDetail() {

    const {surah } = UseGlobalContext();
    const router = useRouter();
    
    //get query of verses
    const query = router.query.Index;
    
    if(!surah.data) return <p>Loaing</p>
    
    //get single element of verses
    let surahSingle  = {} ; 
    const getSurah = surah.data.result.data.filter(data=>{
        return data.number == query
    });
    surahSingle = getSurah[0]
    //.......
    console.log(surahSingle)
    return (
        <div className="mt-20">
            <p>{surahSingle.name.short}</p>
            <p>{surahSingle.name.transliteration.id} ({surahSingle.numberOfVerses})</p>
            <p></p>
            {surahSingle.verses.map((verse)=>(
                <div className="flex">
                    <p>{verse.number.inSurah}.) </p>
                    <div className="ml-2">
                        <p>{verse.text.arab}</p>
                        <p>{verse.text.transliteration.en}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SurahDetail
