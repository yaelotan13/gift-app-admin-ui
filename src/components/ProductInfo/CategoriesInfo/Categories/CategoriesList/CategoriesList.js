import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import MainCategoryImage from '../MainCategoryImage';
import SubCategory from '../SubCategory';

const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    categoriesContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '3vh',
    },
});

const CategoriesList = (props) => {
    const classes = useStyle();
    const { categories, type, handleMainCategorySelected, categoriesSelected, handleSubCategorySelected } = props;

    return (
        <Box className={classes.categoriesContainer}>
            {categories.map((category) => {
                {return type === 'main' ?
                    <MainCategoryImage 
                        key={category.main_category_id}
                        title={category.main_category_name}
                        img={category.main_category_image}
                        handleClick={handleMainCategorySelected}
                        selected={categoriesSelected.includes(category.main_category_name)} 
                    />
                    :
                    <SubCategory 
                        key={category.sub_category_id}
                        id={category.sub_category_id}
                        title={category.sub_category_name} 
                        handleClick={handleSubCategorySelected} 
                        selected={categoriesSelected.includes(category.sub_category_name)} 
                    />
            }})}
        </Box>
    );
};

export default CategoriesList;
