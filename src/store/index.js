import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sages';
import categoryReducer from './categories/reducers';
import productsReducer from './products/reducer';
import productReducer from './product/reducer';

const rootReducer = combineReducers({
    categories: categoryReducer, 
    products: productsReducer,
    product: productReducer
});

export const browserHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga, browserHistory);