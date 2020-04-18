import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';

import useSelector from '../../../hooks/useSelctor';
import { productCategoriesSelector } from '../../../store/selectors/product';
import Categories from './Categories';
import {  
    deleteMainCategories as deleteMainCategoriesAction, 
    deleteSubCategories as deleteSubCategoriesAction
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

    const deleteMainCategories = (selectedCategories) => {
        dispatch(deleteMainCategoriesAction(productId, selectedCategories));
    };

    const deleteSubCategories = (selectedCategories) => {
        dispatch(deleteSubCategoriesAction(productId, selectedCategories));
    };

    return (
        <div className={classes.root}>
            <Categories 
                type="main"
                handleDelete={deleteMainCategories}
                categories={categoriesSelector.mainCategories}
                title="Main Categories"
            />
            <Categories 
                type="sub"
                handleDelete={deleteSubCategories}
                categories={categoriesSelector.subCategories}
                title="Sub Categories"
            />
        </div>
    ); 
};

export default CategoriesInfo;
