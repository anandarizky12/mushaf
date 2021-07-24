import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

function CardRandomSkeleton() {

    const useStyles = makeStyles(() => ({
        root: {
            position: "relative",
            zIndex: 0
        },
      }));

    const classes = useStyles();
    return (
    
        <div className="w-full items-center flex justify-center h-72 my-16 z-0">
            <Skeleton className={classes.root} width="30%" height="100%"/>
            <Skeleton className="ml-2" variant="text" width="40%"/>
           
        </div>
    )
}

export default CardRandomSkeleton
