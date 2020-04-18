import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    Dialog,
    Box,
} from '@material-ui/core';

import { CenteredSpinner } from '../../components/Layout';

const useStyles = makeStyles({
    content: {
        width: '40vw',
        height: '25vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
    },
});

const Prompt = (props) => {
    const classes = useStyles();
    const { title, onCancel, open, children, loading } = props;

    return (
        <Dialog open={open} onClose={onCancel} aria-labelledby={title}>
            <Box className={classes.content}>
                {
                    loading ?
                    <CenteredSpinner />
                    :
                    <Box>{children}</Box>
                }
            </Box>
        </Dialog>
    );
};

export default Prompt;
