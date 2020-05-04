import * as actionTypes from './actionTypes';

const initialState = {
    name: '',
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTHENTICATED_SUCCESSFULY: {
            return {
                name: action.payload,
                isLoggedIn: true
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;
