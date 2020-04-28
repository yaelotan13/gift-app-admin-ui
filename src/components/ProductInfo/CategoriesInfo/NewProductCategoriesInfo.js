import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import Categories from './Categories';
import useSelector from '../../../hooks/useSelctor';
import { mainCategoriesSlector, subCategoriesSlector } from '../../../store/selectors/categories';
import { productCategoriesSelector } from '../../../store/selectors/product';
import { storeMainCategories, storeSubCategories } from '../../../store/product/actions';
import { MainCategoriesList } from '../../../views/Categories/components';
import { AllCategoriesView } from '../CategoriesInfo/Categories/CategoriesList';

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
    // const dispatch = useDispatch();
    // const mainCategoriesState = useSelector(mainCategoriesSlector);
    // const subCategoriesState = useSelector(subCategoriesSlector);
    // const productCategoriesState = useSelector(productCategoriesSelector);
    // const { mainCategories: productMainCategories, subCategories: productSubCategories } = { ...productCategoriesState };
    const { toggleSubCategorySelected, selectedCategories } = props;
    
    // const deleteMainCategories = (selectedCategories) => {
        
    // };

    // const deleteSubCategories = (selectedCategories) => {
        
    // };

    // const addSubCategories = (subCategories) => {
    //     const newCategories = getCategories(subCategoriesState, subCategories, 'sub');
    //     const categories = [...productSubCategories, ...newCategories];
    //     dispatch(storeSubCategories(categories));
    // };

    // const addMainCategories = (mainCategories) => {
    //     const newCategories = getCategories(mainCategoriesState, mainCategories, 'main');
    //     console.log('in addMainCategories');
    //     console.log(newCategories);
    //     const categories = [...productMainCategories, ...newCategories];
    //     console.log(categories);
    //     dispatch(storeMainCategories(categories));
    // };

    return (
        <div className={classes.root}>
            <AllCategoriesView toggleSelected={toggleSubCategorySelected} selectedCategories={selectedCategories} />
            {/* <Categories 
                type="main"
                handleDelete={removeMainCategories}
                handleAdd={addMainCategories}
                categories={mainCategories}
                title="Main Categories"
            /> */}
            {/* <Categories 
                type="sub"
                handleDelete={removeSubCategories}
                handleAdd={addSubCategories}
                categories={subCategories}
                title="Sub Categories"
            /> */}
        </div>
    ); 
};

export default NewProductCategoriesInfo;
