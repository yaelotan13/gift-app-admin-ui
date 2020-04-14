import React from 'react';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { 
    Box
} from '@material-ui/core';

const useStyles = makeStyles({
    iconsContainer: {
        display: 'flex',
        width: '5vw',
        justifyContent: 'space-around',
        marginLeft: '1vw'
    },
    icon: {
        cursor: 'pointer'
    }
});

const Icons = (props) => {
    const classes = useStyles();
    const { deleteDisabled, deleteClicked, addClicked } = props;

    return (
        <Box className={classes.iconsContainer}>
            <DeleteIcon className={classes.icon} onClick={deleteClicked} />
            <AddIcon className={classes.icon} />
        </Box>
    );
};

export default Icons;
