import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    TextField,
    Input,
    Box
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
    form: {
        marginLeft: '3vw',
        display: 'flex',
        flexDirection: 'column'
    },
    textInput: {
        width: '40vw',
        marginBottom: '4vh',
    },
    img: {
        marginTop: '1vh',
        width: '15vw',
        height: '20vh',
        border: `1px solid ${grey[300]}`,
        borderRadius: 5,
    }
});

const DEFAULT_PRODUCT_INFO = {
    product_id: null,
    product_name: '',
    store: '',
    price: '',
    link: '',
    product_image: ''
};

const BasicProductInfo = (props) => {
    const classes = useStyles();
    const { 
        productId, 
        productName, 
        store, 
        price, 
        link,
        productImage 
    } = props.productInfo ? { ...props.productInfo } : DEFAULT_PRODUCT_INFO;
    
    return (
        <form className={classes.form}>
            <TextField 
                id="standard-basic" 
                label="Name" 
                className={classes.textInput} 
                variant="outlined" 
                defaultValue={productName}
            />
            <TextField 
                id="standard-basic" 
                label="Store" 
                className={classes.textInput} 
                variant="outlined" 
                defaultValue={store}
            />
            <TextField 
                id="standard-basic" 
                label="Price" 
                className={classes.textInput} 
                variant="outlined" 
                defaultValue={price}
            />
            <TextField 
                id="standard-basic" 
                label="Link" 
                className={classes.textInput} 
                variant="outlined" 
                defaultValue={link}
            />
            Image: <Input type="file" disableUnderline={true}/>
            <Box className={classes.img} />
        </form>
    );
};

export default BasicProductInfo;
