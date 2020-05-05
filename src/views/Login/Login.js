import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import image from '../../assets/images/gifts.jpg';
import Info from './components/Info';
import { login } from '../../store/user/actions';
import { userSelector } from '../../store/selectors/user';
import useSelector from '../../hooks/useSelctor';

const useStyles = makeStyles({
    container: {
        display: 'flex'
    },
    image: {
        width: '60vw',
        height: '100vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover'
    },
    content: {
        width: '40vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Login = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userState = useSelector(userSelector);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (userState.isLoggedIn) {
            props.history.push('/feed');
        }
        if (userState.hasError) {
            setHasError(true);
        }
    }, [userState]);

    const handelSubmit = (name, password) => {
        dispatch(login(name, password));
    };

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Info handelSubmit={handelSubmit} hasError={hasError} loading={userState.loading} />
            </Box>
            <Box className={classes.image} />
        </Box>
    );
};

export default withRouter(Login);