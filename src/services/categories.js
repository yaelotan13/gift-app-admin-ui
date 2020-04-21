import { categoriesUrl } from '../config/serverUrl';
import axios from 'axios';

export const getAllCategories = async () => {
    const mainCategories = await axios.get(`${categoriesUrl}main`);
    const subCategories = await axios.get(`${categoriesUrl}sub`);
    return {
        main: mainCategories.data,
        sub: subCategories.data
    };
};
