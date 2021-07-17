import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { Grid } from "@material-ui/core";


function CardRandomSkeleton() {


    return (
        <Grid className="w-full items-center flex justify-center h-72 my-16">
            <Skeleton width="40%" height="100%"/>
            <Grid className="ml-5">
                    <Skeleton variant="text" width={173}/>
                    <Skeleton variant="text" width={400}/>
            </Grid>
        </Grid>
    )
}

export default CardRandomSkeleton
