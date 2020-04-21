import * as actionTypes from './actionTypes';

export const fetchAllProducts = () => {
    return {
        type: actionTypes.FETCH_ALL_PRODUCTS
    };
};

export const deleteProduct = (productId) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: productId
    };
};

export const seatchProducts = (value) => {
    return {
        type: actionTypes.SEARCH_PRODUCTS,
        payload: value
    };
};