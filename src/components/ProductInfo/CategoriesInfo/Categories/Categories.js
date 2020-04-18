import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Box, 
    Typography
} from '@material-ui/core';

import useSelector from '../../../../hooks/useSelctor';
import { categoriesSlector } from '../../../../store/selectors/categories';
import { Prompt } from '../../../Layout';
import CategoriesHeader from './CategoriesHeader';
import { CategoriesList, CategoriesAvatarList } from './CategoriesList';
import { ActionButtons } from '../../../Layout';

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
    const { handleDelete, categories, title, type } = props; 
    const [openDeletePrompt, setOpenDeletePrompt] = useState(false);
    const [openCategoriesPrompt, setOpenCategoriesPrompt] = useState(false);
    const [mainCategoriesSelected, setMainCategoriesSelected] = useState([]);
    const [subCategoriesSelected, setSubCategoriesSelected] = useState([]);
    const categoriesState = useSelector(categoriesSlector);
    console.log(categoriesState);
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

    const handleDeleteCategories = () => {
        type === 'main' ? handleDelete(mainCategoriesSelected) : handleDelete(subCategoriesSelected);
    }

    const getString = deleteCategories => `Are you sure you want to delete ${deleteCategories} from categories?`
    
    const getQuestion = (type) => {
        return type === 'main' ?
            getString(mainCategoriesSelected.join(', '))
            :
            getString(subCategoriesSelected.join(', '))
    }

    const handleAddCategories = (categoriesSelected) => {
        console.log('in handleAddCategories');
        console.log(categoriesSelected);
    };

    return (
        <Box>
            <Prompt 
                open={categoriesState.deleteSuccess ? false : openDeletePrompt} 
                title="delete categories dialog"
                loading={categoriesState.loading}
            >
                <Fragment>
                    <Typography variant="subtitle1" align="center">{getQuestion(type)}</Typography>
                    <ActionButtons onAction={handleDeleteCategories} onCancel={() => setOpenDeletePrompt(false)} action="Delete" />
                </Fragment>
            </Prompt>
            <Prompt 
                open={openCategoriesPrompt} 
                title="categories dialog"
                loading={categoriesState.loading}
            >
                {type === 'main' ?
                <CategoriesAvatarList 
                    mainCategories={categoriesState.mainCategories} 
                    selectable={true} 
                    onCancel={() => setOpenCategoriesPrompt(false)}
                    onAction={(checked) => handleAddCategories(checked)}
                    action="Add"
                />
                :
                <CategoriesList 
                    type="sub"
                    categories={categoriesState.subCategories}
                    categoriesSelected={[]}
                />}
            </Prompt>
            <CategoriesHeader 
                title={title} 
                deleteClicked={() => setOpenDeletePrompt(true)}
                addClicked={() => setOpenCategoriesPrompt(true)} 
            />
            <CategoriesList
                categories={categories} 
                type={type}
                handleMainCategorySelected={handleMainCategorySelected}
                categoriesSelected={type === 'main' ? mainCategoriesSelected : subCategoriesSelected}
                handleSubCategorySelected={handleSubCategorySelected}
            />
        </Box>
    );
};

export default Categories;
