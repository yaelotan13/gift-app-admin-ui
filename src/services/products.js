import { productUrl } from '../config/serverUrl';
import axios from 'axios';

export const getProducts = async () => {
    return await axios.get(productUrl);
};

