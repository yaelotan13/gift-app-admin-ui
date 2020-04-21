import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    headline: {
        margin: '1vh 0 4vh 16vw'
    },
});

const ProductPageHeader = ({ title }) => {
    const classes = useStyles();

    return (
        <Typography variant="h5" className={classes.headline}>{title}</Typography>
    );
};

export default ProductPageHeader;
