import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import Inputs from './Inputs';
import SubCategorisList from '../../Categories/components/SubCategoriesList';
import CategoryHeader from '../CategoryHeader';
import { Prompt, SingleButton } from '../../../components/Layout';
import AllSubCategories from '../../Categories/components/AllSubCategories';
import useSelector from '../../../hooks/useSelctor';
import { categoriesSlector } from '../../../store/selectors/categories';

const useStyles = makeStyles({
    input: {
        margin: '3vh 1vw'
    },
    button: {
        position: 'absolute',
        bottom: '15vh',
    }
});

const MainCategory = (props) => {
    const classes = useStyles();
    const { categoryId, onSubmit } = props;
    const [open, setOpen] = useState(false);
    const categoriesState = useSelector(categoriesSlector);
    const getSubCategories = () => {
        if (categoryId) {
            return categoriesState.subCategories.filter(category =>
                category.main_category_id === categoryId
            )
        }
        return [];
    };
    const [subCategories, setSubCategories] = useState(getSubCategories());
    const getMainCategoryInfo = () => {
        if (categoryId) {
            const info =  categoriesState.mainCategories.filter(category => 
                category.main_category_id === categoryId
            )

            return {
                name: info.main_category_name,
                image: info.main_category_image
            }
        }
        return {
            name: "",
            image: null
        }

    };

    const { name, image } = getMainCategoryInfo();
    const [categoryName, setCategoryName] = useState(name);
    const [categoryImage, setCategoryImage] = useState(image);

    const handleAddSubCategories = (categories) => {
        setSubCategories(prevState => [...prevState, ...categories]);
        setOpen(false);
    };

    const handleDelete = (categoryToDeleteId) => {
        setSubCategories(prevState => {
            return prevState.filter(category => category.sub_category_id !== categoryToDeleteId)
        })
    };

    const handleFileChange = (event) => {
        const url = window.URL.createObjectURL(event.target.files[0]);
        setCategoryImage(url);
    };

    const handleSaveMainCategory = () => {
        const categoryInfo = {
            name: categoryName,
            image: categoryImage,
            subCategories
        };

        onSubmit(categoryInfo);
    };

    return (
        <Box className={classes.container}>
            <Prompt     
                title='Add sub categories'
                onCancel={() => setOpen(false)}
                open={open}
                large
            >
                <AllSubCategories categories={categoriesState.subCategories} handleCancel={() => setOpen(false)} handleAction={handleAddSubCategories} />
            </Prompt>
            <Inputs 
                CategoryName={categoryName} 
                handleChnage={(event) => setCategoryName(event.target.value)} 
                handleFileChnage={handleFileChange} 
                imgUrl={categoryImage} 
            />
            <CategoryHeader header="Sub categories" handleClicked={() => setOpen(true)} />
            <SubCategorisList categories={subCategories} handleDelete={handleDelete} />
            <SingleButton onSubmit={handleSaveMainCategory} buttonTitle="Save" variant="contained" />
        </Box>
    );
};

export default MainCategory;
