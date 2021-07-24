import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { Grid } from "@material-ui/core";


function CardRandomSkeleton() {


    return (
        <Grid className="w-full items-center flex justify-center  h-72 my-16">
            <Skeleton width="30%" height="100%"/>
            <Skeleton className="ml-2" variant="text" width="40%"/>
           
        </Grid>
    )
}

export default CardRandomSkeleton
