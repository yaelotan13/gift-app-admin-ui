import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CenteredSpinner } from '../../components/Layout';
import useSelector from '../../hooks/useSelctor';
import { productsSlector } from '../../store/selectors/products';
import CategoriesDialog from '../../components/Categories/CategoriesDialog';
import { WithMenue } from '../../hocs';
import ProductTable from './ProductsTable';
import ProductsHeader from './ProductsHeader';
import Search from './Search';
import { fetchAllProducts } from '../../store/products/actions';

const useStyles = makeStyles({
    container: {
        marginLeft: 240,
        padding: '30px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    table: {
        maxWidth: '80vw',
        margin: '5vh auto'
    },
    icon: {
        cursor: 'pointer'
    }
});

const Feed = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
    const [product, setProduct] = useState(0);
    const productsState = useSelector(productsSlector);

    const handleShowCategories = (product) => {
        setProduct(product);
        setOpenCategoryDialog(true);
    };

    const handleEditProduct = (productId) => {
        history.push(`/edit/?product_id=${productId}`);
    };

    const handleRefresh = () => {
        dispatch(fetchAllProducts());
    };

    return (
        <Box className={classes.container}>
            {
                productsState.loading ?
                <CenteredSpinner />
                :
                <Box>
                    <ProductsHeader size={productsState.products.length} onRefresh={handleRefresh} />
                    <Search />
                    <ProductTable products={productsState.products} handleShowCategories={handleShowCategories} handleEditProduct={handleEditProduct} />
                    <CategoriesDialog product={product} open={openCategoryDialog} onClose={() => setOpenCategoryDialog(false)} />
                </Box>
            }
        </Box>
    )
};

export default WithMenue(Feed);