import * as actionTypes from './actionTypes';

const initialState = {
    products: [],
    searchText: '',
    loading: false,
    hasError: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_PRODUCTS: {
            return {
                ...state,
                loading: true,
                hasError: null,
            }
        }
        case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: null,
                products: action.payload,
            }
        }
        case actionTypes.FETCH_ALL_PRODUCTS_FAILURE: {
            return {
                ...state,
                loading: false,
                hasError: action.payload,
            }
        }
        case actionTypes.DELETE_PRODUCT: {
            return {
                ...state,
                loading: true,
                hasError: null
            }
        }
        case actionTypes.DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: null,
                products: action.payload
            }
        }
        case actionTypes.DELETE_PRODUCT_FAILURE: {
            return {
                ...state,
                loading: false,
                hasError: action.payload
            }
        }
        case actionTypes.SEARCH_PRODUCTS: {
            return {
                ...state,
                searchText: action.payload
            }
        }
        default: {
            return state;
        }
    };
};

export default reducer;
