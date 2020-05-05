import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import useSelector from '../../hooks/useSelctor';
import { WithMenu } from '../../hocs';
import { categoriesSlector } from '../../store/selectors/categories';
import { CenteredSpinner } from '../../components/Layout';
import { Prompt } from '../../components/Layout';
import { EditSubCategories, NewMainCategory, DeleteMainCategory, MainCategoriesList } from './components';
import { addMainCategory, deleteMainCategories, editSubCategoriesToMain, fetchAllCategories } from '../../store/categories/actions';

const useStyles = makeStyles({
    root: {
        height: '90vh',
        marginLeft: 240,
    },
    categoriesContainer: {
        margin: 56
    },
    actions: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between'
    },
});

const Categories = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [selectedMainCategories, setSelectedMainCategories] = useState([]);
    const categoriesState = useSelector(categoriesSlector);
console.log(categoriesState);
    useEffect(() => {
        dispatch(fetchAllCategories());
    }, []);

    const handleCategoryClick = (category) => {
        setCategory(category);
        setOpen(true);
    };

    const handleEdit = (mainCategoryId, subCategories) => {
        const originalSubCategories = categoriesState.subCategories.filter(category => category.main_category_id === mainCategoryId);
        const originalSubCategoriesNames = Array.from(originalSubCategories, category => category.sub_category_name);
        const removedCategories = originalSubCategoriesNames.filter(category => subCategories.indexOf(category) < 0);
        const addedCategories = subCategories.filter(category => originalSubCategoriesNames.indexOf(category) < 0);

        const payload = {
            mainCategoryId,
            removedCategories,
            addedCategories
        }

        console.log(payload);
        setOpen(false);
        dispatch(editSubCategoriesToMain(payload));
        dispatch(fetchAllCategories()); // Check
    };

    const handleNewMainCategory = (newCategory) => {
        dispatch(addMainCategory(newCategory));
    };

    const handleToggle = (category) => {
        if (selectedMainCategories.indexOf(category) === -1) {
            setSelectedMainCategories(prevState => [...prevState, category]);
        } else {
            setSelectedMainCategories(prevState => prevState.filter(curCategory => curCategory !== category))
        }
    };

    const handleDeleteMainCategories = () => {
        const categoriesIds = Array.from(selectedMainCategories, category => category.main_category_id);
        dispatch(deleteMainCategories(categoriesIds));
        setSelectedMainCategories([]);
    };

    return (
        <Box className={classes.root}>
            {
                categoriesState.loading ?
                <CenteredSpinner />
                :
                <Box className={classes.categoriesContainer}>
                    <Prompt 
                        title='Edit sub categories'
                        onCancel={() => setOpen(false)}
                        open={open}
                        loading={categoriesState.loading}
                        large
                    >
                        <EditSubCategories mainCategory={category} handleCancel={() => setOpen(false)} handleEdit={handleEdit} />
                    </Prompt>
                    <Box className={classes.actions}>
                        <NewMainCategory handleSubmit={handleNewMainCategory} />
                        <DeleteMainCategory categories={selectedMainCategories} handleDelete={handleDeleteMainCategories} />
                    </Box>
                    <MainCategoriesList 
                        categories={categoriesState.mainCategories}
                        checked={selectedMainCategories}
                        handleToggle={handleToggle}
                        handleMainCategorySelected={handleCategoryClick}
                    />
                </Box>
            }
        </Box>
    );
};

export default withRouter(WithMenu(Categories));
