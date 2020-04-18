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

export const fetchProductCategories = (productId) => {
    return {
        type: actionTypes.FETCH_PRODUCT_CATEGORIES,
        payload: productId
    };
};