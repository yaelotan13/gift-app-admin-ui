import { productUrl, categoriesUrl } from '../config/serverUrl';
import axios from 'axios';

export const getProducts = async () => {
    return await axios.get(productUrl);
};

export const getProductInfo = async (id) => {
    const productInfo = await axios.get(`${productUrl}?product_id=${id}`);
    const categoriesInfo = await axios.get(`${categoriesUrl}?product_id=${id}`);

    return {
        ...productInfo.data[0],
        ...categoriesInfo.data
    };
};
