import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Typography
} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const useStyle = makeStyles({
    subCategory: {
        border: `1px solid ${grey[300]}`,
        borderRadius: 20,
        marginRight: '1vw',
        padding: '0 16px',
        cursor: 'pointer',
        width: '15vw',
        height: '4vh',
        '&:hover': {
            opacity: 0.8
        }
    },
    selected: {
        border: `1px solid ${blue[500]}`,
    }
});

const SubCategory = (props) => {
    const classes = useStyle();
    const { title, selected, handleClick } = props;

    return (
        <Box 
            className={selected ? [classes.subCategory, classes.selected].join(' ') : classes.subCategory} 
            onClick={() => handleClick(title)}
        >
            <Typography variant="subtitle1">{title}</Typography>
        </Box>
    );
};

export default SubCategory;
