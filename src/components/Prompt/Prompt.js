import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    Dialog,
    Button,
    Box,
    CircularProgress
} from '@material-ui/core';

const useStyles = makeStyles({
    content: {
        width: '40vw',
        height: '25vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '40%',
        margin: '0 auto',
        marginTop: '3vh',
        display: 'flex',
        justifyContent: 'space-around'
    }
});

const Prompt = (props) => {
    const classes = useStyles();
    const { title, action, onAction, onCancel, open, children } = props;

    return (
        <Dialog open={open} onClose={onCancel} aria-labelledby={title}>
            <Box className={classes.content}>
                {children}
                <Box className={classes.buttonContainer}>
                    <Button onClick={onCancel} variant="outlined" color="primary">Cancel</Button>
                    <Button onClick={onAction} variant="contained" color="primary">{action}</Button>
                </Box>
            </Box>
        </Dialog>
    );
};

export default Prompt;
