import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    },
    input: {
        marginTop: '3vh',
        width: '60%'
    },
    error: {
        color: 'red'
    },
    button: {
        marginTop: '8vh'
    }
});

const Inputs = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [editing, setEditing] = useState(false);
    const { handelSubmit, hasError } = props;

    const onSubmit = () => {
        setEditing(false);
        handelSubmit(name, password)
    };

    const handleNameChanged = (event) => {
        setEditing(true);
        setName(event.target.value)
    };

    const handlePasswordChanged = (event) => {
        setEditing(true);
        setPassword(event.target.value)
    };

    return (
        <Box className={classes.container}>
            <TextField 
                className={classes.input} 
                label="Name" 
                value={name} 
                onChange={handleNameChanged}
            />
            <TextField 
                className={classes.input} 
                label="Password" 
                value={password} 
                onChange={handlePasswordChanged}
            />
            {hasError && !editing && <Typography className={classes.error} variant="body2">Incorrect password</Typography>}
            <Button 
                onClick={onSubmit}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Let Me In
            </Button>
        </Box>
    );
};

export default Inputs;