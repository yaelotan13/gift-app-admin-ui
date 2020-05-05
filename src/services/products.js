import { productUrl } from '../config/serverUrl';
import axiosInstance from './axiosInstance';

export const getProducts = async () => {
    return await axiosInstance.get(productUrl);
};

export const deleteProducts = async (productsId) => {
    console.log('in service deleteProducts');
    console.log(productsId);
    const response = await axiosInstance.delete(`${productUrl}`, {
        data: {
            products_id: productsId
        }
    });

    console.log(response);
    return await getProducts();
};