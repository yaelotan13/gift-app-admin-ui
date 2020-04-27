import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField } from '@material-ui/core';

import { FileUploader } from '../../../components/Layout';

const useStyles = makeStyles({
    input: {
        margin: '3vh 1vw',
        width: '15vw'
    }
});

const MainCategoryInput = (props) => {
    const classes = useStyles();
    const { CategoryName, handleChnage, handleFileChnage, imgUrl } = props;

    return (
        <Box className={classes.container}>
            <TextField 
                id="standard-basic" 
                label="Name" 
                name="name"
                value={CategoryName}
                onChange={handleChnage}
                className={classes.input}
            />
            <FileUploader onFileChange={handleFileChnage} imgUrl={imgUrl} />
        </Box>
    );
};

export default MainCategoryInput;