import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './views/Feed';
import Edit from './views/Edit';

const Routes = () => {
    return (
        <Switch>
          <Route path="/feed" exact component={Feed} />
          <Route path="/edit" component={Edit} />
          <Route path="/" component={Feed} />
        </Switch>
      );
};

export default Routes;
