import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-3vh'
    },
    separator: {
        width: '2vh'
    },
    img: {
        width: '7vh',
        height: '7vh'
    }
});

const EditSubCategoriesHeader = (props) => {
    const classes = useStyles();
    const { categoryImage, categoryName } = props;

    return (
        <Box className={classes.header}>
            <Avatar src={categoryImage} className={classes.img} />
            <Box className={classes.separator} />
            <Typography className={classes.headline}>{`${categoryName} sub categories`}</Typography>
        </Box>
    )
};

export default EditSubCategoriesHeader;
