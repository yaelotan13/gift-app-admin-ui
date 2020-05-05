import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField, Button, Typography, CircularProgress } from '@material-ui/core';

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
    buttonContainer: {
        display: 'flex',
        marginTop: '8vh',
        alignItems: 'center',
    },
    button: {
        marginRight: '2vw'
    },
});

const Inputs = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [editing, setEditing] = useState(false);
    const { handelSubmit, hasError, loading } = props;

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
                data-cy="password-input"
            />
            {hasError && !editing && <Typography className={classes.error} variant="body2">Incorrect password</Typography>}
            <Box className={classes.buttonContainer}>
                <Button 
                    onClick={onSubmit}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    data-cy="login-button"
                >
                    Let Me In
                </Button>
                {loading && <CircularProgress size={20} />}
            </Box>
        </Box>
    );
};

export default Inputs;