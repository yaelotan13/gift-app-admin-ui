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
import { getAllCategories, addMainCategory, deleteMainCategories, editSubCategoriesToMainCategory } from './categories';
import { isValidpassowrd } from './auth';

export const userService = {
    isValidpassowrd
};

export const categoriesService = {
    getAllCategories,
    addMainCategory,
    deleteMainCategories,
    editSubCategoriesToMainCategory
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
