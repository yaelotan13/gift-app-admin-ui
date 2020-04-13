import { url } from '../config/serverUrl';
import axios from 'axios';

export const getCategories = async (productId) => {
    // return await axios.get(url, {
    //     params: {
    //         productId
    //     }
    // });
    return await [
        {category_id: 1, name: 'sport'}, 
        {category_id: 2, name: 'lifestyle'}, 
        {category_id: 3, name: 'outdoors'}
    ];
};
