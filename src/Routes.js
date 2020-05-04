import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Feed from './views/Feed';
import Product from './views/Product';
import Categories from './views/Categories';
import Login from './views/Login';
import { PrivateRoute } from './hocs';

const Routes = () => {
    return (
        <Switch>
          {/* <Redirect from="/" to="/login" /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute path="/feed" exact component={Feed} />
          <PrivateRoute path="/edit" component={() => <Product title="Edit Product" buttonTitle="Edit" />} />
          <PrivateRoute path="/add-product" exact component={() => <Product title="Add Product" buttonTitle="Add" />} />
          <PrivateRoute path="/categories" component={Categories} />
          <PrivateRoute path="/" component={Feed} />
        </Switch>
      );
};

export default Routes;
