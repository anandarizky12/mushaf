import React from 'react';
import { UseGlobalContext } from '../../components/Context';
import AyatKursiSkeleton from '../../components/Skeleton/AyatKursiSkeleton';


function Doa() {
    const {ayatKursi} = UseGlobalContext();
  
    console.log(ayatKursi);
    if(!ayatKursi.data) return <AyatKursiSkeleton/>
    return (
        <div className="mt-28 mb-20 flex items-center justify-center ">
          
            <div className="jumbotron w-4/5 h-auto p-5 rounded-md shadow-md">
                <h1 className="text-3xl font-semibold text-center">Ayat Kursi</h1>
                <p className="text-right font-light text-2xl mt-6 my-2">{ayatKursi.data.arabic}</p>
                <p className="text-justify font-light text-xl mt-8 my-2">{ayatKursi.data.latin}</p>
                
                <p className="text-justify font-bold text-xl mt-8 my-2">Artinya : </p>
                <p className="text-justify font-normal text-xl mt-5 my-2">{ayatKursi.data.translation}</p>
               
                <p className="text-justify font-bold text-xl mt-5 my-2">Tafsir ayat : </p>
                <p className="text-justify font-thin text-xl mt-5 my-2">{ayatKursi.data.tafsir}</p>
            </div>
        </div>
    )
}

export default Doa;
