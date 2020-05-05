import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { browserHistory } from './store';

import Routes from './Routes';
import { reLogin } from './store/user/actions';
import { isLoggedIn } from './services/auth';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isLoggedIn()) {
      console.log('is logged in!');
      dispatch(reLogin());
    }
  }, [dispatch]);

  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

export default App;
