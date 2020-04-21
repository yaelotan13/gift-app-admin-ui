
import { takeLatest } from 'redux-saga/effects'

import * as categoriesActionTypes from '../categories/actionTypes';
import * as productsActionTypes from '../products/actionTypes';
import * as productActionTypes from '../product/actionTypes';

import { 
    FetchAllProducts, 
    FetchProductInfo, 
    DeleteMainCategories,
    DeleteSubCategories,
    FetchAllCategories,
    AddSubCategoriesToProduct,
    AddMainCategoriesToProduct,
    UpdateProductInfo,
    AddNewProduct
} from './api'; // TODO - Upper case ?

function* rootSaga() {
    yield takeLatest(productsActionTypes.FETCH_ALL_PRODUCTS, FetchAllProducts);
    yield takeLatest(productActionTypes.FETCH_PRODUCT_INFO, FetchProductInfo);
    yield takeLatest(productActionTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT, DeleteSubCategories);
    yield takeLatest(productActionTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT, DeleteMainCategories);
    yield takeLatest(categoriesActionTypes.FETCH_ALL_CATEGORIES, FetchAllCategories);
    yield takeLatest(productActionTypes.ADD_SUB_CATEGORIES_TO_PRODUCT, AddSubCategoriesToProduct);
    yield takeLatest(productActionTypes.ADD_MAIN_CATEGORIES_TO_PRODUCT, AddMainCategoriesToProduct);
    yield takeLatest(productActionTypes.UPDATE_PRODUCT_INFO, UpdateProductInfo);
    yield takeLatest(productActionTypes.ADD_NEW_PRODUCT, AddNewProduct);
};

export default rootSaga;