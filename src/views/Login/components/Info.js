import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography } from '@material-ui/core';

import Inputs from './Inputs';

const useStyles = makeStyles({
    container: {
        height: '50vh',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '5vh',
        alignItems: 'center',
        boxShadow: '-4px 4px 38px 8px rgba(217,217,217,1)'
    }
});

const Info = (props) => {
    const classes = useStyles();
    const { handelSubmit, hasError } = props;

    return (
        <Card className={classes.container}>
            <Typography variant="h5">Log In</Typography>
            <Inputs handelSubmit={handelSubmit} hasError={hasError} />
        </Card>
    );
};

export default Info;