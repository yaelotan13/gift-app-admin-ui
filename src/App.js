import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './views/Feed';

function App() {
  return (
    <Switch>
      <Route path="/feed" exact component={Feed} />
      <Route path="/" component={Feed}/>
    </Switch>
  );
}

export default App;
