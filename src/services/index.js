import { 
    getProductInfo, 
    deleteMainCategories, 
    deleteSubCategories,
    addMainCategories,
    addSubCategories,
    updateProductInfo,
    addNewProduct
} from './product';
import { getProducts, deleteProduct } from './products'
import { getAllCategories } from './categories';

export const categoriesService = {
    getAllCategories
};

export const productsService = {
    getProducts,
    deleteProduct
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
