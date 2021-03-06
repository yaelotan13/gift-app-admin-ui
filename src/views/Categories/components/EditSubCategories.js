import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import useSelector from '../../../hooks/useSelctor';
import { subCategoriesSlector } from '../../../store/selectors/categories';
import EditSubCategoriesHeader from './EditSubCategoriesHeader';
import SubCategoryList from './SubCategoriesList';
import { ActionButtons } from '../../../components/Layout';
import Input from './Input';

const filteredSubCategories = (subCategories, mainCategoryId) => 
    subCategories.filter((category) => category.main_category_id === mainCategoryId);

const useStyles = makeStyles({
    root: {
        height: '55vh',
        padding: '26px',
        display: 'flex',
        flexDirection: 'column',
    },
    headline: {
        textAlign: 'center'
    },
    addButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: '2vh',
        width: '90%',
        display: 'flex',
        justifyContent: 'center'
    }
});

const EditSubCategories = (props) => {
    const classes = useStyles();
    const { 
        main_category_name: categoryName, 
        main_category_image: categoryImage,
        main_category_id: categoryId, 
    } = { ...props.mainCategory };
    const allsubCategories = useSelector(subCategoriesSlector);
    const filteredCategories = filteredSubCategories(allsubCategories, categoryId);
    const [categories, setCategories] = useState([...filteredCategories]);
    const { handleCancel, handleEdit } = props;

    const handleDelete = (subCategoryId) => {
        setCategories((prevCategories) => 
            prevCategories.filter((category) =>
                category.sub_category_id !== subCategoryId)
        )
    };

    const handleNewSubCategory = (newCategory) => {
        setCategories(categories => [...categories, newCategory]);
    }

    const handleSave = () => {
        const subCategories = Array.from(categories, category => category.sub_category_name)
        handleEdit(categoryId, subCategories);
    }
    
    return (
        <Box className={classes.root}>
            <EditSubCategoriesHeader categoryImage={categoryImage} categoryName={categoryName} />
            <Input onSubmit={handleNewSubCategory} />
            <SubCategoryList categories={categories} handleDelete={handleDelete} />
            <Box className={classes.buttonsContainer}>
                <ActionButtons action="Save" onCancel={handleCancel} onAction={handleSave} />
            </Box>
        </Box>
    );
};

export default EditSubCategories;
