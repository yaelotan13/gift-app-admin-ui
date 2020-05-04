import * as actionsTypes from './actionTypes';

export const login = (name) => {
    return {
        type: actionsTypes.AUTHENTICATED_SUCCESSFULY,
        payload: name
    }
}

