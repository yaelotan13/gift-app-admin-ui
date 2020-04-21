import * as actionTypes from './actionTypes';

export const fetchAllProducts = () => {
    return {
        type: actionTypes.FETCH_ALL_PRODUCTS
    };
};

export const deleteProduct = (productId) => {
    console.log('in deleteProduct');
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: productId
    };
};