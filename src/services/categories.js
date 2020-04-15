import { categoriesUrl } from '../config/serverUrl';
import axios from 'axios';

export const getCategories = async (productId) => {
    const result = await axios.get(`${categoriesUrl}?id=${productId}`);
    return result.data;
};

export const deleteSubCategories = async (productId, subCategories) => {
    const result = await axios.delete(`${categoriesUrl}/sub/?id=${productId}`, {
        parmas: {
            sub_categories: subCategories
        }
    });
    console.log(result);
};