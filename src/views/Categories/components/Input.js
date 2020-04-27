import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        margin: '3vh 1vw',
        width: '15vw'
    }
});

const Input = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const { onSubmit } = props;

    const handleSubmit = (categoryName) => {
        const newSubCategory = {
            sub_category_id: categoryName,
            sub_category_name: categoryName
        };

        onSubmit(newSubCategory);
        setValue('');
    };

    return (
        <Box className={classes.container}>
            <TextField 
                id="standard-basic" 
                label="Name" 
                name="name"
                value={value}
                onChange={event => setValue(event.target.value)}
                className={classes.input}
            />
            <Button variant="contained" size="small" color="secondary" onClick={() => handleSubmit(value)}>
                Add
            </Button>
        </Box>
    );
};

export default Input;