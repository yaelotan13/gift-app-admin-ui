import { categoriesUrl } from '../config/serverUrl';
import axiosInstance from './axiosInstance';

export const getAllCategories = async () => {
    const mainCategories = await axiosInstance.get(`${categoriesUrl}main`);
    const subCategories = await axiosInstance.get(`${categoriesUrl}sub`);
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

    await axiosInstance.post(`${categoriesUrl}main`, category, config);
    return await axiosInstance.get(`${categoriesUrl}main`);
};

export const deleteMainCategories = async (categories) => {
    await axiosInstance.delete(`${categoriesUrl}main`, {
        data: {
            main_categories: categories
        }
    });

    return await await axiosInstance.get(`${categoriesUrl}main`);
};

export const editSubCategoriesToMainCategory = async (subCategoriesInfo) => {
    const { mainCategoryId, removedCategories, addedCategories } = subCategoriesInfo;
    const result = await axiosInstance.post(`${categoriesUrl}sub?mainCategoryId=${mainCategoryId}`, {
        removedCategories,
        addedCategories
    });

    console.log(result);
    return await getAllCategories(); // TODO only fetch sub categories ?
};
