import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Chip } from '@material-ui/core';

import useSelector from '../../../hooks/useSelctor';
import { productCategoriesSelector } from '../../../store/selectors/product';
import { fetchProductCategories } from '../../../store/product/actions';
import { fetchProductInfo } from '../../../store/product/actions';
import { CategoriesList, CategoriesAvatarList } from '../../ProductInfo/CategoriesInfo/Categories/CategoriesList';
import { ListDialog } from '../../Layout';
import { ActionButtons } from '../../Layout';
import { SubCategoriesList } from '../../../views/Categories/components';

const useStyles = makeStyles({
    mainCategoryHeader: {
        marginBottom: '1vh',
    },
    subCtegoryHeader: {
        margin: '3vh 0 1vh 0',
    },
    subCategoriesContainer: {
        width: '25vw',
        display: 'flex',
        flexWrap: 'warp',
    },
    buttonsCaintainer: {
        marginTop: '6vh'
    }
});

const CategoryDialog = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const productCategoriesState = useSelector(productCategoriesSelector);
    const { open, onClose, history } = props;
    const { product_id : productId, product_name : productName } = {...props.product };
    const { loading, hasError, mainCategories, subCategories } = {...productCategoriesState};
    
    useEffect(() => {
        if (productId) {
            dispatch(fetchProductInfo(productId));
        }
    }, [productId]);

    const handleEdit = () => {
        history.push(`/edit/?product_id=${productId}`);
    };

    return (
        <ListDialog 
            open={open}
            onClose={onClose}
            loading={loading}
            title={productName}
        >
            <Typography variant="body1" className={classes.mainCategoryHeader}>Main Categories</Typography>
            <CategoriesAvatarList mainCategories={mainCategories} selectable={false} />
            <Typography variant="body1" className={classes.subCtegoryHeader}>Sub Categories</Typography>
            <Box className={classes.subCategoriesContainer}>
                <SubCategoriesList categories={subCategories} />
            </Box>
            <Box className={classes.buttonsCaintainer}>
                <ActionButtons onCancel={onClose} onAction={handleEdit} action='Edit'/>
            </Box>
        </ListDialog>
    );
};

export default withRouter(CategoryDialog);
