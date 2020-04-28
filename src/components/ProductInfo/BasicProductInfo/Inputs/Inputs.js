import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

import { FileUploader } from '../../../Layout';

const useStyles = makeStyles({
    price: {
        width: '10vw'
    }
});

const Inputs = (props) => {
    const classes = useStyles();
    const { imgUrl, values, handleChnage, onFileChange } = props;

    return (
        <Fragment>
            <TextField 
                label="Name" 
                variant="outlined" 
                name="productName"
                value={values.productName}
                onChange={handleChnage}
            />
            <TextField 
                label="Store" 
                name="store"
                variant="outlined" 
                value={values.store}
                onChange={handleChnage}
            />
            <TextField 
                label="Price" 
                variant="outlined"
                name="price" 
                value={values.price}
                onChange={handleChnage}
                className={classes.price}
            />
            <TextField  
                label="Link" 
                variant="outlined" 
                name="link"
                value={values.link}
                onChange={handleChnage}
            />
            <FileUploader onFileChange={onFileChange} imgUrl={imgUrl} image={values.productImage} />
        </Fragment>
    );
};

export default Inputs;
