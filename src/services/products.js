import { productUrl } from '../config/serverUrl';
import axios from 'axios';

export const getProducts = async () => {
    return await axios.get(productUrl);
};

export const deleteProducts = async (productsId) => {
    console.log('in service deleteProducts');
    console.log(productsId);
    const response = await axios.delete(`${productUrl}`, {
        data: {
            products_id: productsId
        }
    });

    console.log(response);
    return await getProducts();
};