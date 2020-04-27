import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import useSelector from '../../../hooks/useSelctor';
import { mainCategoriesSlector } from '../../../store/selectors/categories';
import { CategoriesAvatarList } from '../../../components/ProductInfo/CategoriesInfo/Categories/CategoriesList';

const useStyles = makeStyles({

});

const AllMainCategories = (props) => {
    const classes = useStyles();
    const mainCategoriesState = useSelector(mainCategoriesSlector);
    const { handleAddCategories, handleCancel } = props;

    return (
        <Box>
            <CategoriesAvatarList 
                mainCategories={mainCategoriesState} 
                selectable 
                onAction={handleAddCategories} 
                onCancel={handleCancel}
                action="Add"
            />
        </Box>
    );
};

export default AllMainCategories;