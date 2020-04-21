import { productUrl } from '../config/serverUrl';
import axios from 'axios';

export const getProducts = async () => {
    return await axios.get(productUrl);
};

export const deleteProduct = async (productId) => {
    const response = await axios.delete(`${productUrl}?product_id=${productId}`);

    console.log(response);
    return await getProducts();
};