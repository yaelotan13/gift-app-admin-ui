import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import Categories from './Categories';
import useSelector from '../../../hooks/useSelctor';
import { mainCategoriesSlector, subCategoriesSlector } from '../../../store/selectors/categories';
import { productCategoriesSelector } from '../../../store/selectors/product';
import { storeMainCategories, storeSubCategories } from '../../../store/product/actions';

const useStyles = makeStyles({
    root: {
        marginTop: '-3vh',
    },
}); 

const getCategories = (allCategories, newCategorisId, prefix) => {
    const categoryId = `${prefix}_category_id`;
    const ret = [];

    for (let i = 0; i < allCategories.length; ++i) {
        for (let j = 0; j < newCategorisId.length; ++j) {
            if (allCategories[i][categoryId] === newCategorisId[j]) {
                ret.push(allCategories[i]);
            }
        }
    }

    return ret;
};

const NewProductCategoriesInfo = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { productId } = props;
    const mainCategoriesState = useSelector(mainCategoriesSlector);
    const subCategoriesState = useSelector(subCategoriesSlector);
    const productCategoriesState = useSelector(productCategoriesSelector);
    const { mainCategories: productMainCategories, subCategories: productSubCategories } = { ...productCategoriesState };
    console.log('NewProductCategoriesInfo');
    const deleteMainCategories = (selectedCategories) => {
        
    };

    const deleteSubCategories = (selectedCategories) => {
        
    };

    const addSubCategories = (subCategories) => {
        const newCategories = getCategories(subCategoriesState, subCategories, 'sub');
        const categories = [...productSubCategories, ...newCategories];
        dispatch(storeSubCategories(categories));
    };

    const addMainCategories = (mainCategories) => {
        const newCategories = getCategories(mainCategoriesState, mainCategories, 'main');
        const categories = [...productMainCategories, ...newCategories];
        dispatch(storeMainCategories(categories));
    };

    return (
        <div className={classes.root}>
            <Categories 
                type="main"
                handleDelete={deleteMainCategories}
                handleAdd={addMainCategories}
                categories={productMainCategories}
                title="Main Categories"
                loading={false}
            />
            <Categories 
                type="sub"
                handleDelete={deleteSubCategories}
                handleAdd={addSubCategories}
                categories={productSubCategories}
                title="Sub Categories"
                loading={false}
            />
        </div>
    ); 
};

export default NewProductCategoriesInfo;
