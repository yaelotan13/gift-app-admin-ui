import { 
    getProductInfo, 
    deleteMainCategories, 
    deleteSubCategories,
    addMainCategories,
    addSubCategories,
    updateProductInfo,
    addNewProduct
} from './product';
import { getProducts } from './products'
import { getAllCategories } from './categories';

export const categoriesService = {
    getAllCategories
};

export const productsService = {
    getProducts,
};

export const productService = {
    getProductInfo,
    deleteMainCategories,
    deleteSubCategories,
    addMainCategories,
    addSubCategories,
    updateProductInfo,
    addNewProduct
};
