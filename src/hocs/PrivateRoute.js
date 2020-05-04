import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import useSelector from '../hooks/useSelctor';
import { userSelector } from '../store/selectors/user';

const useStyles = makeStyles({

});

const PrivateRoute = ({component: Component, ...rest}) => {
    const userState = useSelector(userSelector);
    console.log(userState);
    // let isLoggedIn = false;

    // useEffect(() => {
    //     console.log('in useEffect');
    //     isLoggedIn = userState.isLoggedIn;
    //     console.log(isLoggedIn);
    // }, [userState])

    return (
        <>
            {userState ? 
                <Route {...rest} render={props => (
                    userState.isLoggedIn ?
                        <Component {...props} />
                    : <Redirect to="/login" />
                )} />
            :
            <CircularProgress />}
        </>
    );
};

export default PrivateRoute;