import * as actionTypes from './actionTypes';

export const fetchSubCategories = (productId) => {
    return {
        type: actionTypes.FETCH_SUB_CATEGORIES,
        productId
    }
};