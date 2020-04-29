import * as actionTypes from './actionTypes';

const initialState = {
    productId: null, 
    productName: '',
    store: '',
    price: null,
    link: '', 
    productImage: '',
    loading: false,
    hasError: false,
    mainCategories: [],
    subCategories: [],
    deleteSuccess: false,
    updateSuccess: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_INFO: {
            return {
                ...state,
                loading: true,
                hasError: false,
                updateSuccess: false,
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
                productImage: action.payload.product_image,
                mainCategories: action.payload.main,
                subCategories: action.payload.sub,
                updateSuccess: false
            }
        }
        case actionTypes.FETCH_FAILURE : {
            return {
                ...state,
                loading: false,
                hasError: true,
                updateSuccess: false
            }
        }
        case actionTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT: {
            return {
                ...state, 
                loading: true,
                hasError: false,
                deleteSuccess: false
            }
        }
        case actionTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT: {
            return {
                ...state, 
                loading: true,
                hasError: false,
                deleteSuccess: false,
                updateSuccess: false
            }
        }
        case actionTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                mainCategories: action.payload.main,
                deleteSuccess: true
            }
        }
        case actionTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                subCategories: action.payload.sub,
                deleteSuccess: true
            }
        }
        case actionTypes.FETCH_PRODUCT_CATEGORIES: {
            return {
                ...state,
                loading: false,
                hasError: false,
                updateSuccess: false
            }
        }
        case actionTypes.FETCH_PRODUCT_CATEGORIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                mainCategories: action.payload.main,
                subCategories: action.payload.sub,
                updateSuccess: false
            }
        }
        case actionTypes.ADD_SUB_CATEGORIES_TO_PRODUCT: {
            return {
                ...state,
                loading: true,
                hasError: false,
                updateSuccess: false
            }
        }
        case actionTypes.ADD_MAIN_CATEGORIES_TO_PRODUCT: {
            return {
                ...state,
                loading: true,
                hasError: false,
                updateSuccess: false
            }
        }
        case actionTypes.ADD_SUB_CATEGORIES_TO_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                subCategories: action.payload.sub,
                updateSuccess: true,
            }
        }
        case actionTypes.ADD_MAIN_CATEGORIES_TO_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                mainCategories: action.payload.main,
                updateSuccess: true,
            }
        }
        case actionTypes.UPDATE_PRODUCT_INFO: {
            return {
                ...state,
                loading: true,
                hasError: false,
                updateSuccess: false,
            }
        }
        case actionTypes.UPDATE_PRODUCT_INFO_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                updateSuccess: true,
            }
        }
        case actionTypes.UPDATE_PRODUCT_INFO_FAILURE: {
            return {
                ...state,
                loading: false,
                hasError: action.payload,
                updateSuccess: false,
            }
        }
        case actionTypes.CLEAR_PRODUCT_INFO: {
            return {
                ...state,
                productId: null, 
                productName: '',
                store: '',
                price: '',
                link: '', 
                productImage: '',
                subCategories: [],
                mainCategories: [],
                updateSuccess: false
            }
        }
        case actionTypes.STORE_PRODUCT_INFO: {
            return {
                ...state,
                productId: action.payload.productId,
                productName: action.payload.productName,
                store: action.payload.store,
                price: action.payload.price,
                link: action.payload.link,
                productImage: action.payload.productImage
            }
        }
        case actionTypes.STORE_PRODUCT_MAIN_CATEGORIES: {
            return {
                ...state,
                mainCategories: action.payload,
            }
        }
        case actionTypes.STORE_PRODUCT_SUB_CATEGORIES: {
            return {
                ...state,
                subCategories: action.payload,
            }
        }
        case actionTypes.ADD_NEW_PRODUCT: {
            return {
                ...state,
                loading: true,
                hasError: false,
                deleteSuccess: false,
                updateSuccess: false
            }
        }
        case actionTypes.ADD_NEW_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                deleteSuccess: false,
                updateSuccess: true
            }
        }
        default: {
            return state
        }
    };
};

export default reducer;
