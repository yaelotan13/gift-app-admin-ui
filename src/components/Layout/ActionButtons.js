import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Button } from '@material-ui/core';

const useStyles = makeStyles({
    buttonContainer: {
        width: '35%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
    },
    cancelButton: {
        marginRight: '1vw'
    }
});

const ActionButtons = (props) => {
    const classes = useStyles();
    const { onCancel, onAction, action } = props;

    return (
        <Box className={classes.buttonContainer}>
            <Button className={classes.cancelButton} onClick={onCancel} variant="outlined" color="primary">Cancel</Button>
            <Button onClick={onAction} variant="contained" color="primary">{action}</Button>
        </Box>
    );
};

export default ActionButtons;
