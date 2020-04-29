import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import ProductPage from '../../components/ProductInfo/ProductInfo';
import { WithMenu } from '../../hocs';
import ProductPageHeader from './ProductPageHeader';

const useStyles = makeStyles({
    root: {
        marginLeft: 240,
        padding: '3vh'
    },
    center: {
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Product = ({ location, title, buttonTitle }) => {
    const classes = useStyles();
    const productId = location.search.slice(location.search.indexOf('=') + 1);

    return (
        <Box className={classes.root}>
            <ProductPageHeader title={title} />
            <ProductPage productId={productId} buttonTitle={buttonTitle} />           
        </Box>
    );
};

export default WithMenu(withRouter(Product));