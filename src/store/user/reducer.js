import * as actionTypes from './actionTypes';

const initialState = {
    name: '',
    isLoggedIn: false,
    loading: false,
    hasError: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN: {
            return {
                ...state,
                loading: true,
                hasError: false
            }
        }
        case actionTypes.LOG_IN_SUCCESS: {
            return {
                name: action.payload,
                isLoggedIn: true,
                loading: false,
                hasError: false
            }
        }
        case actionTypes.LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                hasError: true
            }
        }
        case actionTypes.LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                hasError: false
            }
        }
        case actionTypes.RELOG_IN: {
            return {
                ...state,
                hasError: false,
                loading: false,
                isLoggedIn: true
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;
