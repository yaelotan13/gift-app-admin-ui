import * as actionTypes from './actionTypes';

export const fetchProductInfo = (productId) => {
    return {
        type: actionTypes.FETCH_PRODUCT_INFO,
        payload: productId
    };
};

export const deleteMainCategories = (productId, mainCategories) => {
    return {
        type: actionTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT,
        productId,
        payload: mainCategories
    };
};

export const deleteSubCategories = (productId, subCategories) => {
    return {
        type: actionTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT,
        productId,
        payload: subCategories
    };
};

export const addSubCategories = (productId, subCategories) => {
    return {
        type: actionTypes.ADD_SUB_CATEGORIES_TO_PRODUCT,
        productId,
        payload: subCategories
    };
};

export const addMainCategories = (productId, mainCategories) => {
    return {
        type: actionTypes.ADD_MAIN_CATEGORIES_TO_PRODUCT,
        productId,
        payload: mainCategories
    };
};

export const updateProductInfo = (productId, productInfo) => {
    return {
        type: actionTypes.UPDATE_PRODUCT_INFO,
        productId,
        payload: productInfo
    };
};

export const clearProductInfo = () => {
    return {
        type: actionTypes.CLEAR_PRODUCT_INFO
    };
};

export const storeProductInfo = (productInfo) => {
    return {
        type: actionTypes.STORE_PRODUCT_INFO,
        payload: productInfo
    }
};

export const storeMainCategories = (categories) => {
    return {
        type: actionTypes.STORE_PRODUCT_MAIN_CATEGORIES,
        payload: categories
    };
};

export const storeSubCategories = (categories) => {
    return {
        type: actionTypes.STORE_PRODUCT_SUB_CATEGORIES,
        payload: categories
    };
};

export const addNewProduct = (newProduct) => {
    console.log('in action: addNewProduct');
    return {
        type: actionTypes.ADD_NEW_PRODUCT,
        payload: newProduct
    }
}