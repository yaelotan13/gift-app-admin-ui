import { productUrl } from '../config/serverUrl';
import axios from 'axios';

export const getProducts = async () => {
    return await axios.get(productUrl);
};

export const getProductById = async (id) => {
    const result = await axios.get(`${productUrl}?id=${id}`);
    return result.data[0];
};
