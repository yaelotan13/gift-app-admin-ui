import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Typography
} from '@material-ui/core'; 

import Icons from '../../../Icons';

const useStyle = makeStyles({
    container: {
        display: 'flex',
    },
});

const CategoriesHeader = (props) => {
    const classes = useStyle();
    const { title, deleteDisabled, deleteClicked, addClicked } = props;

    return (
        <Box className={classes.container}>
            <Typography variant="subtitle1">{title}</Typography>
            <Icons 
                deleteDisabled={deleteDisabled} 
                deleteClicked={deleteClicked}
                addClicked={addClicked}
            />
        </Box>
    );
};

export default CategoriesHeader;
