import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const WithCenter = ({ children }) => {
    const classes = useStyles();

    return (
        <Box className={classes.center}>
            {children}
        </Box>
    );
};

export default WithCenter;
