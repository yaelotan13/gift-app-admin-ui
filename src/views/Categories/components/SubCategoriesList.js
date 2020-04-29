import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Chip } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        // marginTop: '3vh',
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip: {
        margin: '0vh 1vw 1vh 0'
    }
});

const SubCategoriesList = (props) => {
    const classes = useStyles();
    const { categories, handleDelete } = props;

    return (
        <Box className={classes.container}>
            {categories.map((category) =>
                <Chip 
                    variant="outlined" 
                    color="primary" 
                    onDelete={handleDelete ? () => handleDelete(category.sub_category_id) : null} 
                    label={category.sub_category_name} 
                    className={classes.chip}
                />
            )}
        </Box>
    );
};

export default SubCategoriesList;
