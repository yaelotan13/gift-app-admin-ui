import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    Dialog, 
    DialogTitle, 
    Box, 
    List, 
} from '@material-ui/core';

import CenteredSpinner from './CenteredSpinner';

const useStyles = makeStyles({
    wrapper: {
        width: '30vw',
        padding: '2vh 3vw',
        borderRadius: 5,
    },
    center: {
        textAlign: 'center',
    },
});

const ListDialog = (props) => {
    const classes = useStyles();
    const { open, onClose, loading, children, title } = props;

    return (
        <Dialog open={open} onClose={onClose}>
            <Box className={classes.wrapper}>
                {
                    loading ?
                    <CenteredSpinner />
                    :
                    <Fragment>
                        <DialogTitle className={classes.center}>{title}</DialogTitle>
                        <List>
                            {children}
                        </List>
                    </Fragment>
                }
            </Box>
        </Dialog>
    );
};

export default ListDialog;
