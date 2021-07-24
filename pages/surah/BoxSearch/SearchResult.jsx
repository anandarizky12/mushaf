import React, {useEffect} from 'react'
import { UseGlobalContext } from '../../../components/Context';
import SearchCardResult from './SearchCardResult';
import Divider from '@material-ui/core/Divider';


function SearchResult({cari}) {
    
    const {surah, filteredSurah, open, ref} = UseGlobalContext();
    const filter = filteredSurah(surah);
    
    return (
            <>
                {open && filter &&
                    <div ref={ref} className="jumbotron flex flex-col 
                                    mt-5 max-h-56 overflow-y-auto w-4/6 sm:w-2/6 h-auto 
                                    rounded-md p-5 absolute mt-52 md:mt-80 top-0">
                        <header className="text-md p-1  ">Hasil Ditemukan ({filter.length})</header>
                        <Divider/>
                        {filter.map((data, i)=>(
                                <SearchCardResult 
                                        key={ i+1 }
                                        id={i+1}
                                        name = {data.name.transliteration.id}
                                        ayatL = {data.numberOfVerses}
                                />
                                    ))}
                    </div>
                }
            </>
    )
}

export default SearchResult;
