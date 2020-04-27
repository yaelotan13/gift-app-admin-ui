import { categoriesUrl } from '../config/serverUrl';
import axios from 'axios';

export const getAllCategories = async () => {
    const mainCategories = await axios.get(`${categoriesUrl}main`);
    const subCategories = await axios.get(`${categoriesUrl}sub`);
    return {
        main: mainCategories.data,
        sub: subCategories.data
    };
};

const getMainCategoryFormData = (category) => {
    const bodyFormData = new FormData();
    bodyFormData.set('name', category.name);
    bodyFormData.set('image', category.image);

    return bodyFormData;
};

export const addMainCategory = async (newCategory) => {
    const category =  getMainCategoryFormData(newCategory);
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
    };

    await axios.post(`${categoriesUrl}main`, category, config);
    return await axios.get(`${categoriesUrl}main`);
};

export const deleteMainCategories = async (categories) => {
    await axios.delete(`${categoriesUrl}main`, {
        data: {
            main_categories: categories
        }
    });

    return await await axios.get(`${categoriesUrl}main`);
};

export const editSubCategoriesToMainCategory = async (subCategoriesInfo) => {
    const { mainCategoryId, removedCategories, addedCategories } = subCategoriesInfo;
    const result = await axios.post(`${categoriesUrl}sub?mainCategoryId=${mainCategoryId}`, {
        removedCategories,
        addedCategories
    });

    console.log(result);
    return await getAllCategories(); // TODO only fetch sub categories ?
};
