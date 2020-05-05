import { call, put } from "@redux-saga/core/effects";

import * as categoriesActionTypes from '../categories/actionTypes';
import * as productsActionsTypes from '../products/actionTypes';
import * as productActionsTypes from '../product/actionTypes';
import * as userActionTypes from '../user/actionTypes';
import { categoriesService, productService, productsService, userService } from '../../services';

export function* LogIn(action) {
    console.log('in log in saga');
    const passwordIsValid = yield call(userService.isValidpassowrd, action.payload.password);
    if (passwordIsValid) {
        yield put({
            type: userActionTypes.LOG_IN_SUCCESS,
        })
    } else {
        yield put({
            type: userActionTypes.LOG_IN_FAILURE
        })
    }
};

export function* FetchAllProducts() {
    try {
        const result = yield call(productsService.getProducts);
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

export function* DeleteMainCategoriesFromProduct(action) {
    try {
        const result = yield call(productService.deleteMainCategoriesFromProduct, action.productId, action.payload);
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

export function* DeleteSubCategoriesFromProduct(action) {
    try {
        const result = yield call(productService.deleteSubCategoriesFromProduct, action.productId, action.payload);
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

export function* AddSubCategoriesToProduct(action) {
    try {
        const result = yield call(productService.addSubCategories, action.productId, action.payload);
        console.log(result);
        yield put({
            type: productActionsTypes.ADD_SUB_CATEGORIES_TO_PRODUCT_SUCCESS,
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

export function* AddMainCategoriesToProduct(action) {
    try {
        const result = yield call(productService.addMainCategories, action.productId, action.payload);
        console.log(result);
        yield put({
            type: productActionsTypes.ADD_MAIN_CATEGORIES_TO_PRODUCT_SUCCESS,
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

export function* UpdateProductInfo(action) {
    try {
        const result = yield call(productService.updateProductInfo, action.productId, action.payload);
        console.log(result);
        yield put({
            type: productActionsTypes.UPDATE_PRODUCT_INFO_SUCCESS,
            payload: result
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: productActionsTypes.UPDATE_PRODUCT_INFO_FAILURE,
            payload: error
        })
    }
};

export function* AddNewProduct(action) {
    console.log('in saga AddNewProduct');
    try {
        const result = yield call(productService.addNewProduct, action.payload);
        console.log(result);
        yield put({
            type: productActionsTypes.ADD_NEW_PRODUCT_SUCCESS,
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

export function* DeleteProduct(action) {
    console.log('in saga DeleteProduct');
    try {
        const result = yield call(productsService.deleteProducts, action.payload);
        console.log(result);
        yield put({
            type: productsActionsTypes.DELETE_PRODUCT_SUCCESS,
            payload: result.data
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: productsActionsTypes.DELETE_PRODUCT_FAILURE,
            payload: error
        })
    }
};

export function* AddMainCategories(action) {
    console.log('in saga AddMainCategories');
    try {
        const result = yield call(categoriesService.addMainCategory, action.payload);
        console.log(result);
        yield put({
            type: categoriesActionTypes.ADD_MAIN_CATEGORY_SUCCESS,
            payload: result.data
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: categoriesActionTypes.FETCH_FAILURE,
            payload: error
        })
    }
}

export function* DeleteMainCategories(action) {
    try {
        const result = yield call(categoriesService.deleteMainCategories, action.payload);
        console.log(result);
        yield put({
            type: categoriesActionTypes.DELETE_MAIN_CATEGORIES_SUCCESS,
            payload: result.data
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: categoriesActionTypes.FETCH_FAILURE,
            payload: error
        })
    }
}

export function* EditSubCategoriesToMain(action) {
    try {
        const result = yield call(categoriesService.editSubCategoriesToMainCategory, action.payload);
        console.log(result);
        yield put({
            type: categoriesActionTypes.EDIT_SUB_CATEGORIS_TO_MAIN_SUCCESS,
            payload: result.data
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: categoriesActionTypes.FETCH_FAILURE,
            payload: error
        })
    }
}