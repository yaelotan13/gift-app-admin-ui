import  CryptoJS from 'crypto-js';
import { browserHistory } from '../store';
import { usersUrl } from '../config/serverUrl';
import axiosInstance from './axiosInstance';

const encrypt = (token) => CryptoJS.AES.encrypt(token, process.env.REACT_APP_SECRET_KEY).toString();
const decrypt = (token) => CryptoJS.AES.decrypt(token, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);

export const isValidpassowrd = async (token) => {
    console.log('sending to server');
    var encryptedToken = encrypt(token);
    const result = await axiosInstance.post(usersUrl, { token: encryptedToken });
    if (result.status === 200) {
        sessionStorage.setItem('token', encryptedToken);
        return true;
    }
    return false;
};

export const isLoggedIn = () => {
    const encryptedToken = sessionStorage.getItem('token');
    if (encryptedToken) {
        const decryptedToken = decrypt(encryptedToken);
        if (decryptedToken === process.env.REACT_APP_PASSWORD) {
            return true;
        }
    }

    return false;
};

export const logOut = () => {
    sessionStorage.removeItem('token');
    browserHistory.push('/login');
};