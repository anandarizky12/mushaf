import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { Grid } from "@material-ui/core";


function CardSurah() {


    return (
    <>
        {[1,2,3,4,5].map(index=>(
            <Grid  key={index} className="w-full mt-20 items-center flex justify-center h-48 ">
                    <Skeleton  width="80%" height="80%"/>
            </Grid>
            ))}
    </>
    )
}

export default CardSurah
