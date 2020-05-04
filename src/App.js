import React from 'react';
import { Router } from 'react-router-dom';
import { browserHistory } from './store';

import Routes from './Routes';

function App() {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

export default App;
