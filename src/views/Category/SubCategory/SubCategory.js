import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import Inputs from './Inputs';
import { Prompt, SingleButton } from '../../../components/Layout';
import AllMainCategories from './AllMainCategories';
import CategoryHeader from '../CategoryHeader';
import { CategoriesList } from '../../../components/ProductInfo/CategoriesInfo/Categories/CategoriesList';

const useStyles = makeStyles({
    root: {
        height: '80vh'
    }
});

const SubCategory = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { onSubmit } = props;
    const [categoryName, setCategoryName] = useState('');
    const [mainCategories, setMainCategories] = useState([]);

    const handleAddMainCategories = (categories) => {
        setMainCategories(prevState => [...prevState, ...categories]);
        setOpen(false);
    };

    const handleSaveSubCategory = () => {
        const subCategoryInfo = {
            name: categoryName,
            mainCategories
        };

        onSubmit(subCategoryInfo);
    };

    return (
        <Box className={classes.root}>
            <Prompt     
                title='Add main categories'
                onCancel={() => setOpen(false)}
                open={open}
                large
            >   
                <AllMainCategories handleCancel={() => setOpen(false)} handleAddCategories={handleAddMainCategories} />
            </Prompt>
            <Inputs CategoryName={categoryName} handleChnage={event => setCategoryName(event.target.value)} />
            <CategoryHeader header="Main categories" handleClicked={() => setOpen(true)} />
            <CategoriesList 
                type="main"
                categories={mainCategories}
            />
            <SingleButton onSubmit={handleSaveSubCategory} buttonTitle="Save" variant="contained" />
        </Box>
    );
};

export default SubCategory;
