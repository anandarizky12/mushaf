import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { UseGlobalContext } from '../../components/Context';
import CardSurah from '../../components/Skeleton/CardSurah';


function SurahDetail() {

    const {surah } = UseGlobalContext();
    const router = useRouter();
    
    //get query of verses
    const query = router.query.Index;
    //get single element of verses
    let surahSingle  = {} ; 
    const getSurah = surah.data.result.data.filter(data=>{
        return data.number == query
    });
    surahSingle = getSurah[0]
    //.......
    
    
    if(!surah.data) return <CardSurah/>
    
    // if(!getSurah[0]) return 
 
    return (
        <div className="mt-20 flex items-center justify-center">
            
            <div className="w-4/5">

                <div className="flex flex-col w-full items-center justify-center m-2 mb-12">
                    <h1 className="text-5xl">{surahSingle.name.short}</h1>
                    <p className="text-xl mt-2 font-semibold">{surahSingle.name.transliteration.id}</p>
                    <p className="text-md ">({surahSingle.name.translation.id})</p>
                    <p className="text-sm font-thin"> {surahSingle.revelation.id} - {surahSingle.numberOfVerses} Ayat</p>
            

                </div>
              
                {surahSingle.verses.map((verse)=>(
                    <div className="flex jumbotron m-2 h-auto w-full rounded-md shadow-md">
                        <p className="m-2">{verse.number.inSurah}.) </p>
                        <div className="ml-2 w-full m-4">
                            <p className="text-right text-2xl">{verse.text.arab}</p>
                            <p className="text-md text-justify font-thin mt-5">{verse.text.transliteration.en}</p>
                            <p className="text-md text-justify font-semithin my-2">{verse.translation.id}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SurahDetail
