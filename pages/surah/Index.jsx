import React from 'react'
import { UseGlobalContext } from '../../components/Context';
import SurahCard from '../../components/Card/SurahCard';
import SearchResult from './BoxSearch/SearchResult';
import CardSurah from '../../components/Skeleton/CardSurah';

function Surah() {
    const {surah, cari, handleCari} = UseGlobalContext();

    console.log(cari);

    return (
        <div className="mt-12">
            <div className="bg-surah-bg w-full h-96 bg-center flex-col bg-cover flex justify-center items-center">
                <p className="font-semibold text-gray-300 text-3xl">Cari Surah</p>
                <form className="w-4/5 flex justify-center items-center mt-2">
                    <input placeholder="Search Here"  
                           type="text"
                           name="input"
                           value={cari}
                           onChange={(e)=>handleCari(e)} 
                           className="pl-5 bg-gray-200 w-3/5 h-12 text-black"/>
                </form>
                    <SearchResult cari={cari}/>
            </div>
            <div className="flex items-center mt-8 flex-col">
                <p className="text-2xl">Daftar Surah</p>
                {(!surah.data) ? <CardSurah/>
                :
                <div className="flex justify-center flex-wrap mt-8">
                {surah.data.result.data.map(data=>(
                    <SurahCard shortAr={data.name.short}
                               name = {data.name.transliteration.id}
                               ayatL = {data.numberOfVerses}
                               indName = {data.name.translation.id}
                               number = {data.number}
                    />
                        ))}
                </div>
                }
               
            </div>
        </div>
    )
}

export default Surah
