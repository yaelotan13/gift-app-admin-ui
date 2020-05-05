import axios from 'axios';

const config = {
    baseURL: process.env.REACT_APP_GIFTS_API_BASE_HOST
};

if (config.baseURL && config.baseURL.indexOf('localhost') >= 0) {
    console.log('running on localhost')
} else {
    config.withCredentials = true;
}

const axiosInstance = axios.create(config);

export default axiosInstance;