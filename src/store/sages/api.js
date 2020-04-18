import { call, put } from "@redux-saga/core/effects";

import * as categoriesActionTypes from '../categories/actionTypes';
import * as productsActionsTypes from '../products/actionTypes';
import * as productActionsTypes from '../product/actionTypes';
import { categoriesService, productService } from '../../services';

export function* FetchAllProducts() {
    try {
        const result = yield call(productService.getProducts);
        yield put({
            type: productsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS, 
            payload: result.data
        });
    } catch (error) {
        yield put({
            type: productsActionsTypes.FETCH_ALL_PRODUCTS_FAILURE, 
            payload: error
        });
    }
}

export function* FetchAllCategories() {
    try {
        const result = yield call(categoriesService.getAllCategories);
        yield put({
            type: categoriesActionTypes.FETCH_ALL_CATEGORIES_SUCCESS, 
            payload: result
        });
    } catch (error) {
        yield put({
            type: categoriesActionTypes.FETCH_FAILURE, 
            payload: error
        });
    }
}

export function* FetchProductInfo(action) {
    try {
        const result = yield call(productService.getProductInfo, action.payload);
        yield put({
            type: productActionsTypes.FETCH_PRODUCT_INFO_SUCCESS, 
            payload: result 
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: productActionsTypes.FETCH_FAILURE, 
            payload: error
        });
    }
};

export function* FetchCategories(action) {
    try {
        const result = yield call(categoriesService.getCategories, action.payload);
        yield put({
            type: productActionsTypes.FETCH_PRODUCT_CATEGORIES_SUCCESS, 
            payload: result 
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: productActionsTypes.FETCH_FAILURE, 
            payload: error
        });
    }
}

export function* DeleteMainCategories(action) {
    try {
        const result = yield call(categoriesService.deleteMainCategories, action.productId, action.payload);
        console.log(result);
        yield put({
            type: productActionsTypes.DELETE_MAIN_CATEGORIES_FROM_PRODUCT_SUCCESS,
            payload: result
        })
    } catch (error) {
        yield put({
            type: productActionsTypes.FETCH_FAILURE,
            payload: error
        })
    }
};

export function* DeleteSubCategories(action) {
    try {
        const result = yield call(categoriesService.deleteSubCategories, action.productId, action.payload);
        console.log(result);
        yield put({
            type: productActionsTypes.DELETE_SUB_CATEGORIES_FROM_PRODUCT_SUCCESS,
            payload: result
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: productActionsTypes.FETCH_FAILURE,
            payload: error
        })
    }
};