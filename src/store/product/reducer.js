import * as actionTypes from './actionTypes';

const initialState = {
    productId: null, 
    productName: '',
    store: '',
    price: null,
    link: '', 
    loading: false,
    hasError: false,
    mainCategories: [],
    subCategories: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_INFO: {
            return {
                ...state,
                loading: true,
                hasError: false,
            }
        }
        case actionTypes.FETCH_PRODUCT_INFO_SUCCESS: {
            return {
                loading: false,
                hasError: false,
                productId: action.payload.product_id,
                productName: action.payload.product_name,
                store: action.payload.store,
                price: action.payload.price,
                link: action.payload.link,
                mainCategories: action.payload.main,
                subCategories: action.payload.sub
            }
        }
        case actionTypes.FETCH_FAILURE : {
            return {
                ...state,
                loading: false,
                hasError: true
            }
        }
        case actionTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT: {
            return {
                ...state, 
                loading: true,
                hasError: false
            }
        }
        case actionTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT: {
            return {
                ...state, 
                loading: true,
                hasError: false
            }
        }
        case actionTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                mainCategories: action.payload.main
            }
        }
        case actionTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                mainCategories: action.payload.sub
            }
        }
        case actionTypes.FETCH_PRODUCT_CATEGORIES: {
            return {
                ...state,
                loading: false,
                hasError: false,
            }
        }
        case actionTypes.FETCH_PRODUCT_CATEGORIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                mainCategories: action.payload.main,
                subCategories: action.payload.sub
            }
        }
        default: {
            return state
        }
    };
};

export default reducer;
