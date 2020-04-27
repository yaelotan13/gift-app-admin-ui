import * as actionTypes from './actionTypes';

const initialState = {
    mainCategories: [],
    subCategories: [],
    loading: false,
    hasError: null,
};

const reducer = (state = initialState,  action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_CATEGORIES: {
            return {
                ...state,
                loading: true,
                hasError: null
            }
        }
        case actionTypes.FETCH_ALL_CATEGORIES_SUCCESS: {
            return {
                loading: false,
                hasError: null,
                mainCategories: action.payload.main,
                subCategories:action.payload.sub,
            }
        }
        case actionTypes.FETCH_FAILURE: {
            return {
                ...state,
                loading: false,
                hasError: action.payload,
            }
        }
        case actionTypes.ADD_MAIN_CATEGORY: {
            return {
                ...state,
                loading: true,
                hasError: false
            }
        }
        case actionTypes.ADD_MAIN_CATEGORY_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                mainCategories: action.payload
            }
        }
        case actionTypes.DELETE_MAIN_CATEGORIES: {
            return {
                ...state,
                loading: true,
                hasError: false
            }
        }
        case actionTypes.DELETE_MAIN_CATEGORIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                mainCategories: action.payload
            }
        }
        default:{
            return state;
        }
    }
};

export default reducer;
