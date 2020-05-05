import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import useSelector from '../hooks/useSelctor';
import { userSelector } from '../store/selectors/user';

const PrivateRoute = ({component: Component, ...rest}) => {
    const userState = useSelector(userSelector);
    console.log(userState.isLoggedIn);
    return (
        <>
            {<Route {...rest} render={props => (
                userState.isLoggedIn ?
                    <Component {...props} />
                : <Redirect to="/login" />
            )} />}
        </>
    );
};

export default PrivateRoute;