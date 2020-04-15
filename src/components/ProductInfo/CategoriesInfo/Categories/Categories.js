import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Box, 
    Typography
} from '@material-ui/core';

import Prompt from '../../../Prompt';
import CategoriesHeader from './CategoriesHeader';
import MainCategoryImage from './MainCategoryImage';
import SubCategory from './SubCategory';

const useStyle = makeStyles({
    categoriesContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '3vh',
    },
});

const toggleCategory = (categories, category) => {
    const index = categories.indexOf(category);
    return index === -1 ? categories.concat(category) : categories.filter(el => el !== category);
};

const Categories = (props) => {
    const classes = useStyle();
    const { handleDelete, categories, title, type, deleteSucceeded } = props; 
    const [open, setOpen] = useState(false);
    const [mainCategoriesSelected, setMainCategoriesSelected] = useState([]);
    const [subCategoriesSelected, setSubCategoriesSelected] = useState([]);

    const handleMainCategorySelected = (category) => {
        setMainCategoriesSelected((prevSelected) => {
            return toggleCategory(prevSelected, category);
        })
    };

    const handleSubCategorySelected = (category) => {
        setSubCategoriesSelected((prevSelected) => {
            return toggleCategory(prevSelected, category);
        })
    };

    const deleteCategories = async () => {
        console.log('waiting in categories');
        const value = type === 'main' ? await handleDelete(mainCategoriesSelected) : await handleDelete(subCategoriesSelected);
        console.log('finished waiting');
        console.log(value);
        setOpen(value);
    }

    const getString = deleteCategories => `Are you sure you want to delete ${deleteCategories} from categories?`
    
    const getQuestion = (type) => {
        return type === 'main' ?
            getString(mainCategoriesSelected.join(', '))
            :
            getString(subCategoriesSelected.join(', '))
    }

    return (
        <Box>
            <Prompt 
                open={open} 
                title="delete categories dialog"
                action="Delete"
                onAction={deleteCategories}
                onCancel={() => setOpen(false)}
            >
                <Typography variant="subtitle1" align="center">
                    {getQuestion(type)}
                </Typography>
            </Prompt>
            <CategoriesHeader title={title} deleteClicked={() => setOpen(true)} />
            <Box className={classes.categoriesContainer}>
                {categories.map((category) => {
                    {return type === 'main' ?
                        <MainCategoryImage 
                            key={category.main_category_id}
                            title={category.main_category_name}
                            img={category.main_category_image}
                            handleClick={handleMainCategorySelected}
                            selected={mainCategoriesSelected.includes(category.main_category_name)} 
                        />
                        :
                        <SubCategory 
                            key={category.sub_category_id}
                            title={category.sub_category_name} 
                            handleClick={handleSubCategorySelected}  
                            selected={subCategoriesSelected.includes(category.sub_category_name)} 
                        />
                    }})}
            </Box>
        </Box>
    );
};

export default Categories;
