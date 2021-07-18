import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { Grid } from "@material-ui/core";


function AyatKursiSkeleton() {


    return (
        <div className="mt-28 mb-20 flex h-screen items-center justify-center ">
            <Skeleton variant="rect" width="80%" height="100%" />
        </div>
    )
}

export default AyatKursiSkeleton
