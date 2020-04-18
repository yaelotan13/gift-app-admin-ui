import { getProducts, getProductInfo } from './products'
import { getCategories, deleteMainCategories, deleteSubCategories, getAllCategories } from './categories';

export const categoriesService = {
    getCategories,
    deleteMainCategories,
    deleteSubCategories,
    getAllCategories
};

export const productService = {
    getProducts,
    getProductInfo
};