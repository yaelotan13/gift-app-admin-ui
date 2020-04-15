import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    CircularProgress,
    Typography,
} from '@material-ui/core';

import { productService, categoriesService } from '../../services';
import { ProductPage } from '../../components';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        padding: '3vh'
    },
    headline: {
        margin: '1vh 0 4vh 16vw'
    },
    center: {
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Edit = (props) => {
    const classes = useStyles();
    const productId = props.location.search.slice(props.location.search.indexOf('=') + 1);

    return (
        <Box className={classes.root}>
            <Typography variant="h5" className={classes.headline}>Edit Product</Typography>
            <ProductPage productId={productId} buttonTitle="Update"/>           
        </Box>
    );
};

export default withRouter(Edit);