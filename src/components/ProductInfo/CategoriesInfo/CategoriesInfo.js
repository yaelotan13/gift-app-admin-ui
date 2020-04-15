import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Categories from './Categories';

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
    const { mainCategories, subCategories } = props;

    const deleteMainCategories = (selectedCategories) => {
        console.log('DELETING MAIN CATEGORIES!');
        console.log(selectedCategories);
    };

    const deleteSubCategories = (selectedCategories) => {
        console.log('DELETING SUB CATEGORIES!');
        console.log(selectedCategories);
    };

    return (
        <div className={classes.root}>
            <Categories 
                type="main"
                handleDelete={deleteMainCategories}
                categories={mainCategories}
                title="Main Categories"
            />
            <Categories 
                type="sub"
                handleDelete={deleteSubCategories}
                categories={subCategories}
                title="Sub Categories"
            />
        </div>
    ); 
};

export default CategoriesInfo;
