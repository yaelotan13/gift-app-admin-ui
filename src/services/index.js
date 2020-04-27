import { 
    getProductInfo, 
    deleteMainCategoriesFromProduct,
    deleteSubCategoriesFromProduct,
    addMainCategories,
    addSubCategories,
    updateProductInfo,
    addNewProduct
} from './product';
import { getProducts, deleteProducts } from './products'
import { getAllCategories, addMainCategory, deleteMainCategories } from './categories';

export const categoriesService = {
    getAllCategories,
    addMainCategory,
    deleteMainCategories
};

export const productsService = {
    getProducts,
    deleteProducts
};

export const productService = {
    getProductInfo,
    deleteMainCategoriesFromProduct,
    deleteSubCategoriesFromProduct,
    addMainCategories,
    addSubCategories,
    updateProductInfo,
    addNewProduct
};
