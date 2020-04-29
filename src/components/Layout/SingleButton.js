import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Button } from '@material-ui/core';

const useStyles = makeStyles({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2vh',
    },
    button: {
      width: '6vw',
    }
});

const SubCategoryHeader = (props) => {
    const classes = useStyles();
    const { onSubmit, buttonTitle, variant } = props;

    return (
        <Box className={classes.buttonContainer}>
            <Button variant={variant} color="secondary" className={classes.button} onClick={onSubmit}>
                {buttonTitle}
            </Button>
    </Box>
    );
};

export default SubCategoryHeader;