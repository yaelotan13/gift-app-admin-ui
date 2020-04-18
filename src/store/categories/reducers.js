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
                loading: false,
                hasError: action.payload,
            }
        }
        default:{
            return state;
        }
    }
};

export default reducer;
