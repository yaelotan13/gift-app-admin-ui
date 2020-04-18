import * as actionTypes from './actionTypes';

const initialState = {
    products: [],
    loading: false,
    hasError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_PRODUCTS : {
            return {
                ...state,
                loading: true,
                hasError: false,
            }
        }
        case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS : {
            return {
                loading: false,
                hasError: false,
                products: action.payload
            }
        }
        case actionTypes.FETCH_ALL_PRODUCTS_FAILURE : {
            return {
                ...state,
                loading: false,
                hasError: true,
            }
        }
        default: {
            return state;
        }
    };
};

export default reducer;
