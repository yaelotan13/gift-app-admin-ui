
import { takeLatest } from 'redux-saga/effects'

import * as categoriesActionTypes from '../categories/actionTypes';
import * as productsActionTypes from '../products/actionTypes';
import * as productActionTypes from '../product/actionTypes';

import { 
    FetchAllProducts, 
    FetchProductInfo, 
    FetchCategories, 
    DeleteMainCategories,
    DeleteSubCategories,
    FetchAllCategories
} from './api'; // TODO - Upper case ?

function* rootSaga() {
    yield takeLatest(productsActionTypes.FETCH_ALL_PRODUCTS, FetchAllProducts);
    yield takeLatest(productActionTypes.FETCH_PRODUCT_INFO, FetchProductInfo);
    // yield takeLatest(productActionTypes.FETCH_PRODUCT_CATEGORIES, FetchCategories);
    yield takeLatest(productActionTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT, DeleteSubCategories);
    yield takeLatest(productActionTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT, DeleteMainCategories);
    yield takeLatest(categoriesActionTypes.FETCH_ALL_CATEGORIES, FetchAllCategories);
};

export default rootSaga;