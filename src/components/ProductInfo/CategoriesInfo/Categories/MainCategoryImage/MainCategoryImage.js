import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Typography
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

import tempImage from '../../../../../assets/images/abstract-bg.jpg';

const useStyle = makeStyles({
    mainCategory: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '2vw',
        cursor: 'pointer',
    },
    image: {
        width: '12vw',
        height: '15vh',
        backgroundImage: `url(${tempImage})`,
        backgroundSize: 'cover',
        border: `1px solid ${grey[300]}`,
        '&:hover': {
            opacity: 0.8,
        }
    },
    categoryName: {
        textAlign: 'center'
    },
    selected: {
        border: `1px solid ${grey[900]}`,
    }
});

const MainCategoryImage = (props) => {
    const classes = useStyle();
    const { id, title, img, handleClick, selected } = props;

    return (
        <Box className={classes.mainCategory} onClick={() => handleClick(title)}>
            <Box className={selected ? [classes.image, classes.selected].join(' ') : classes.image} />
            <Typography 
                gutterBottom 
                variant="subtitle1" 
                className={classes.categoryName}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default MainCategoryImage;
