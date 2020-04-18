import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';
import { browserHistory } from './store';

import { fetchAllProducts } from './store/products/actions';
import { fetchAllCategories } from './store/categories/actions';
import { CenteredSpinner } from './components/Layout';
import useSelector from './hooks/useSelctor';
import { productsSlector } from './store/selectors/products';
import Routes from './Routes';

function App() {
  const dispatch = useDispatch();
  const productsState = useSelector(productsSlector);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Router history={browserHistory}>
      {
        productsState.loading ?
        <CenteredSpinner />
        :
        <Routes />
      }
    </Router>
  );
}

export default App;
