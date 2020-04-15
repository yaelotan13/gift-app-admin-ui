import { categoriesUrl } from '../config/serverUrl';
import axios from 'axios';

export const getCategories = async (productId) => {
    const result = await axios.get(`${categoriesUrl}?product_id=${productId}`);
    return result.data;
};

export const deleteMainCategories = async (productId, subCategories) => {
    const result = await axios.delete(`${categoriesUrl}?product_id=${productId}`, {
        data: {
            main_categories: subCategories
        }
    });
    console.log(result);
    return result.status;
};