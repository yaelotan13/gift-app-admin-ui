import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    input: {
        margin: '3vh 1vw'
    }
});

const SubCategoryHeader = (props) => {
    const classes = useStyles();
    const { CategoryName, handleChnage } = props;

    return (
        <Box>
            <TextField 
                id="standard-basic" 
                label="Name" 
                name="name"
                variant="outlined" 
                value={CategoryName}
                onChange={handleChnage}
                className={classes.input}
            />
        </Box>
    );
};

export default SubCategoryHeader;