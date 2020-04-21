import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CenteredSpinner } from '../../components/Layout';
import useSelector from '../../hooks/useSelctor';
import { productsSlector, filteredProductsSelector } from '../../store/selectors/products';
import CategoriesDialog from '../../components/Categories/CategoriesDialog';
import { WithMenue } from '../../hocs';
import ProductTable from './ProductsTable';
import ProductsHeader from './ProductsHeader';
import Search from './Search';
import { fetchAllProducts, deleteProduct as deleteProductAction, seatchProducts } from '../../store/products/actions';
import { Prompt, ActionButtons } from '../../components/Layout';

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
    const [open, setOpen] = useState(false);
    const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
    const [product, setProduct] = useState(0);
    const productsState = useSelector(productsSlector);
    const filteredProducts = useSelector(filteredProductsSelector);

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

    const handleDeleteProduct = (product) => {
        setOpen(true);
        setProduct(product);
    };

    const deleteProduct = () => {
        console.log('dispatching...');
        setOpen(false);
        dispatch(deleteProductAction(product.product_id));
    };

    const onSearchInputChanged = (value) => {
        dispatch(seatchProducts(value));
    };

    const fetchingFilteredTable = () => filteredProducts.length === 0 && productsState.searchText.length === 0;

    return (
        <Box className={classes.container}>
            {
                productsState.loading  || fetchingFilteredTable() ?
                <CenteredSpinner />
                :
                <Box>
                    <Prompt 
                        title={`delete product`}
                        open={open}
                        onCancel={() => setOpen(false)}
                        loading={productsState.loading}
                    >
                        <Box>
                            <Typography variant="body1" align="center">{`Delete ${product.product_name} product?`}</Typography>
                            <ActionButtons 
                                onCancel={() => setOpen(false)}
                                onAction={deleteProduct}
                                action="Delete"
                            />
                        </Box>
                    </Prompt>
                    <ProductsHeader size={productsState.products.length} onRefresh={handleRefresh} />
                    <Search value={productsState.searchText} onChange={(value) => onSearchInputChanged(value)} />
                    <ProductTable 
                        products={filteredProducts} 
                        handleShowCategories={handleShowCategories} 
                        handleEditProduct={handleEditProduct} 
                        handleDeleteProduct={handleDeleteProduct} 
                    />
                    <CategoriesDialog product={product} open={openCategoryDialog} onClose={() => setOpenCategoryDialog(false)} />
                </Box>
            }
        </Box>
    )
};

export default WithMenue(Feed);