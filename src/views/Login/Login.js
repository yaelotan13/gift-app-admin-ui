import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import image from '../../assets/images/gifts.jpg';
import Info from './components/Info';
import { login } from '../../store/user/actions';
import { fetchAllProducts } from '../../store/products/actions';
import { fetchAllCategories } from '../../store/categories/actions';

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
    const [hasError, setHasError] = useState(false);

    const handelSubmit = (name, password) => {
        if (password === process.env.REACT_APP_PASSWORD) {
            dispatch(login(name));
            dispatch(fetchAllProducts());
            dispatch(fetchAllCategories());
            props.history.push('/feed');
        } else {
            setHasError(true);
        }
    };

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Info handelSubmit={handelSubmit} hasError={hasError} />
            </Box>
            <Box className={classes.image} />
        </Box>
    );
};

export default withRouter(Login);