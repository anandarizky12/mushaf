import React from 'react'
import { UseGlobalContext } from '../../components/Context';
import SurahCard from '../../components/Card/SurahCard';


function Surah() {
    const {surah} = UseGlobalContext();

    console.log(surah);

   
    return (
        <div className="mt-12">
            <div className="bg-surah-bg w-full h-96 bg-center flex-col bg-cover flex justify-center items-center">
                <p className="font-semibold text-gray-300 text-3xl">Cari Surah</p>
                <div className="w-3/5 flex justify-center items-center mt-2">
                    <input placeholder="Search Here"  type="text" className="pl-2 bg-gray-200 w-3/5 h-12"/>
                    <button className="bg-red-600 h-12 px-5">Search</button>
                </div>
            </div>
            <div className="flex items-center mt-8 flex-col">
                <p className="text-2xl">Daftar Surah</p>
                {(!surah.data) ? <p>Loading</p>
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
