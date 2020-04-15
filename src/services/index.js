import { getProducts, getProductById } from './products'
import { getCategories, deleteMainCategories } from './categories';

export const categoriesService = {
    getCategories,
    deleteMainCategories
};

export const productService = {
    getProducts,
    getProductById
};