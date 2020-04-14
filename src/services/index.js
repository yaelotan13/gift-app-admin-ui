import { getProducts, getProductById } from './products'
import { getCategories, deleteSubCategories } from './categories';

export const categoriesService = {
    getCategories,
    deleteSubCategories
};

export const productService = {
    getProducts,
    getProductById
};