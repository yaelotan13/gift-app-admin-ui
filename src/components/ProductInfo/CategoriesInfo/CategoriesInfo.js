import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import Categories from './Categories';
import { categoriesService } from '../../../services';

const DEFAULT_MAIN_CATEGORIES = {
    main_category_id : null,
    main_category_name : '',
    main_category_image : '',
};

const useStyles = makeStyles({
    root: {
        marginTop: '-3vh',
    },
});


const CategoriesInfo = (props) => {
    const classes = useStyles();
    const { mainCategories, subCategories, productId } = props;
    const [deleteMainCategoriesSucceeded, setDeleteMainCategoriesSucceeded] = useState(false);
    const [deleteSubCategoriesSucceeded, setDeleteSubCategoriesSucceeded] = useState(false);
    
    const deleteMainCategories = async (selectedCategories) => {
        console.log('DELETING MAIN CATEGORIES!');
        console.log(selectedCategories);
        const status = await categoriesService.deleteMainCategories(productId, selectedCategories);
        return status === 'ok' ? true : false;
    };

    const deleteSubCategories = async (selectedCategories) => {
        console.log('DELETING SUB CATEGORIES!');
        console.log(selectedCategories);
        setTimeout(() => {
            setDeleteSubCategoriesSucceeded(true);
        }, 1000);
    };

    return (
        <div className={classes.root}>
            <Categories 
                type="main"
                handleDelete={deleteMainCategories}
                categories={mainCategories}
                title="Main Categories"
                deleteSucceeded={deleteMainCategoriesSucceeded}
            />
            <Categories 
                type="sub"
                handleDelete={deleteSubCategories}
                categories={subCategories}
                title="Sub Categories"
                deleteSucceeded={deleteSubCategoriesSucceeded}
            />
        </div>
    ); 
};

export default CategoriesInfo;
