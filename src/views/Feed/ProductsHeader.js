import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, IconButton } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    wrapper: {
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    span: {
        fontSize: 12,
        color: 'grey'
    },
    coloredIcon: {
        color: 'blue'
    }
});

const ProductsHeader = (props) => {
    const classes = useStyles();
    const { size, onRefresh, onDelete, categoriesToDelete } = props;
    
    return (
        <Box className={classes.wrapper}>
            <Typography variant="h5">Products <span className={classes.span}> {size} total</span></Typography>
            <Box>
                <IconButton onClick={onDelete} disabled={categoriesToDelete.length === 0}>
                    <DeleteIcon className={categoriesToDelete.length > 0 ? classes.coloredIcon : null}/>
                </IconButton>
                <IconButton onClick={onRefresh}>
                    <CachedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ProductsHeader;
