import * as actionTypes from './actionTypes';

export const fetchCategories = (productId) => {
    return {
        type: actionTypes.FETCH_CATEGORIES,
        payload: productId
    };
};

export const deleteMainCategories = (productId, mainCategories) => {
    return {
        type: actionTypes.DELETE_MAIN_CATEGORIES,
        productId,
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