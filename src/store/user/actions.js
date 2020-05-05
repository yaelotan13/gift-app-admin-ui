import * as actionsTypes from './actionTypes';
import { logOut, logIn } from '../../services/auth';

export const reLogin = () => {
    return {
        type: actionsTypes.RELOG_IN
    }
};

export const login = (name, password) => {
    return {
        type: actionsTypes.LOG_IN,
        payload: {
            password,
            name
        }
    }
}

export const logout = () => {
    logOut();
    return {
        type: actionsTypes.LOG_OUT
    }
}
