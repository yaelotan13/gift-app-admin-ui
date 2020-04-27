import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
    addButtonContainer: {
        marginTop: '3vh',
        display: 'flex',
        alignItems: 'center'
    },
});

const SubCategoryHeader = (props) => {
    const classes = useStyles();
    const { handleClicked } = props;

    return (
        <Box className={classes.addButtonContainer}>
            <Typography>Sub categories</Typography>
            <IconButton onClick={handleClicked}>
                <AddCircleOutlineIcon />
            </IconButton>
        </Box>
    );
};

export default SubCategoryHeader;