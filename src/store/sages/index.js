
import { takeLatest } from 'redux-saga/effects'

import * as categoriesActionTypes from '../categories/actionTypes';
import * as productsActionTypes from '../products/actionTypes';
import * as productActionTypes from '../product/actionTypes';

import { 
    FetchAllProducts, 
    FetchProductInfo, 
    DeleteMainCategoriesFromProduct,
    DeleteSubCategoriesFromProduct,
    FetchAllCategories,
    AddSubCategoriesToProduct,
    AddMainCategoriesToProduct,
    UpdateProductInfo,
    AddNewProduct,
    DeleteProduct,
    AddMainCategories,
    DeleteMainCategories
} from './api'; // TODO - Upper case ?

function* rootSaga() {
    yield takeLatest(productsActionTypes.FETCH_ALL_PRODUCTS, FetchAllProducts);
    yield takeLatest(productActionTypes.FETCH_PRODUCT_INFO, FetchProductInfo);
    yield takeLatest(productActionTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT, DeleteSubCategoriesFromProduct);
    yield takeLatest(productActionTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT, DeleteMainCategoriesFromProduct);
    yield takeLatest(categoriesActionTypes.FETCH_ALL_CATEGORIES, FetchAllCategories);
    yield takeLatest(productActionTypes.ADD_SUB_CATEGORIES_TO_PRODUCT, AddSubCategoriesToProduct);
    yield takeLatest(productActionTypes.ADD_MAIN_CATEGORIES_TO_PRODUCT, AddMainCategoriesToProduct);
    yield takeLatest(productActionTypes.UPDATE_PRODUCT_INFO, UpdateProductInfo);
    yield takeLatest(productActionTypes.ADD_NEW_PRODUCT, AddNewProduct);
    yield takeLatest(productsActionTypes.DELETE_PRODUCT, DeleteProduct);
    yield takeLatest(categoriesActionTypes.ADD_MAIN_CATEGORY, AddMainCategories);
    yield takeLatest(categoriesActionTypes.DELETE_MAIN_CATEGORIES, DeleteMainCategories);
};

export default rootSaga;