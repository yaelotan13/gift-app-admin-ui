const  CryptoJS = require('crypto-js');

const decrypt = (token) => CryptoJS.AES.decrypt(token, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);
const correctPassword = 'mock-password';

const isValidPassword = (password) => {
    if (decrypt(password) === correctPassword) {
        return true;
    }

    return false;
};

module.exports = {
    isValidPassword
}