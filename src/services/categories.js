import { categoriesUrl } from '../config/serverUrl';
import axios from 'axios';

export const getCategories = async (productId) => {
    const result = await axios.get(`${categoriesUrl}?product_id=${productId}`);
    return result.data;
};

export const getAllCategories = async () => {
    console.log(`${categoriesUrl}sub`);
    const mainCategories = await axios.get(`${categoriesUrl}main`);
    const subCategories = await axios.get(`${categoriesUrl}sub`);
    console.log(subCategories);
    return {
        main: mainCategories.data,
        sub: subCategories.data
    };
};

export const deleteMainCategories = async (productId, mainCategories) => {
    await axios.delete(`${categoriesUrl}?product_id=${productId}`, {
        data: {
            main_categories: mainCategories
        }
    });

    return await getCategories(productId);
};

export const deleteSubCategories = async (productId, subCategories) => {
    await axios.delete(`${categoriesUrl}?product_id=${productId}`, {
        data: {
            sub_categories: subCategories
        }
    });

    return await getCategories(productId);
};
