import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';

import useSelector from '../../../hooks/useSelctor';
import { productCategoriesSelector } from '../../../store/selectors/product';
import Categories from './Categories';
import {  
    deleteMainCategories as deleteMainCategoriesAction, 
    deleteSubCategories as deleteSubCategoriesAction,
    addSubCategories as addSubCategoriesAction,
    addMainCategories as addMainCategoriesAction
} from '../../../store/product/actions';

const useStyles = makeStyles({
    root: {
        marginTop: '-3vh',
    },
}); 

const CategoriesInfo = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { productId } = props;
    const categoriesSelector = useSelector(productCategoriesSelector);
    let { mainCategories, subCategories } = { ...categoriesSelector };

    const deleteMainCategories = (selectedCategories) => {
        dispatch(deleteMainCategoriesAction(productId, selectedCategories));
    };

    const deleteSubCategories = (selectedCategories) => {
        dispatch(deleteSubCategoriesAction(productId, selectedCategories));
    };

    const addSubCategories = (subCategories) => {
        dispatch(addSubCategoriesAction(productId, subCategories));
    };

    const addMainCategories = (mainCategories) => {
        console.log(mainCategories);
        dispatch(addMainCategoriesAction(productId, mainCategories));
    };

    return (
        <div className={classes.root}>
            <Categories 
                type="main"
                handleDelete={deleteMainCategories}
                handleAdd={addMainCategories}
                categories={mainCategories}
                title="Main Categories"
                updateSuccess={categoriesSelector.updateSuccess}
                deleteSuccess={categoriesSelector.deleteSuccess}
                loading={categoriesSelector.loading}
            />
            <Categories 
                type="sub"
                handleDelete={deleteSubCategories}
                handleAdd={addSubCategories}
                categories={subCategories}
                title="Sub Categories"
                updateSuccess={categoriesSelector.updateSuccess}
                deleteSuccess={categoriesSelector.deleteSuccess}
                loading={categoriesSelector.loading}
            />
        </div>
    ); 
};

export default CategoriesInfo;
