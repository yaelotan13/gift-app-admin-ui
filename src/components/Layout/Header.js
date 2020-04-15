import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyle = makeStyles({

});

const Header = (props) => {
    const classes = useStyle();
    const { content, align, variant } = props;

    return <Typography variant={variant} align={align}>{content}</Typography>
};

export default Header;
