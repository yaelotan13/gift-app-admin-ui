import * as actionTypes from './actionTypes';

const initialState = {
    id: null,
    name: '',
    img: '',
    subCategories: [],
    loading: false,
    hasError: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUB_CATEGORIES: {
            return {
                ...state,
                loading: true,
                hasError: false,
            }
        }
        case actionTypes.FETCH_SUB_CATEGORIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                subCategories: action.payload
            }
        }
        case actionTypes.FETCH_ERROR: {
            return {
                ...state,
                hasError: true,
                loading: false,
            }
        }
        default: {
            return state;
        }
    }
};

export default reducer;
