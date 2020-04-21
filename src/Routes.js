import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './views/Feed';
import Product from './views/Product';

const Routes = () => {
    return (
        <Switch>
          <Route path="/feed" exact component={Feed} />
          <Route path="/edit" component={() => <Product title="Edit Product" buttonTitle="Edit" />} />
          <Route path="/add-product" exact component={() => <Product title="Add Product" buttonTitle="Add" />} />
          <Route path="/" component={Feed} />
        </Switch>
      );
};

export default Routes;
