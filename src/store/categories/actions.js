import * as actionTypes from './actionTypes';

export const fetchCategories = (productId) => {
    return {
        type: actionTypes.FETCH_CATEGORIES,
        payload: productId
    };
};

export const deleteMainCategories = (mainCategories) => {
    return {
        type: actionTypes.DELETE_MAIN_CATEGORIES,
        payload: mainCategories
    };
};

export const deleteSubCategories = (productId, subCategories) => {
    return {
        type: actionTypes.DELETE_SUB_CATEGORIES,
        productId,
        payload: subCategories
    };
};

export const fetchAllCategories = () => {
    return {
        type: actionTypes.FETCH_ALL_CATEGORIES,
    }
};

export const addMainCategory = (newCategory) => {
    return {
        type: actionTypes.ADD_MAIN_CATEGORY,
        payload: newCategory
    }
}