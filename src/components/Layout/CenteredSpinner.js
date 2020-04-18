import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, CircularProgress } from '@material-ui/core';

const useStyle = makeStyles({
    center: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const CenteredSpinner = props => {
    const classes = useStyle();

    return (
        <Box className={classes.center}>
            <CircularProgress />
        </Box>
    )
};

export default CenteredSpinner;
