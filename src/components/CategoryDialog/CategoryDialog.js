import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, CircularProgress, Box, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { categoriesService } from '../../services';

const useStyles = makeStyles({

});

const CategoryDialog = (props) => {
    const classes = useStyles();
    const { open, onClose, productId } = props;
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const categories = await categoriesService.getCategories();
            console.log(categories);
            setCategories(categories);
            setLoading(false);
        })();
    }, []);
    
    return (
        <Dialog open={open} onClose={onClose}>
            {
                loading ?
                <CircularProgress />
                :
                <Box>
                    <DialogTitle>{productId}</DialogTitle>
                    <List>
                        {categories.map((category) => (
                            <ListItem key={category.category_id}>{category.name}</ListItem>
                        ))}
                    </List>
                </Box>
            }
        </Dialog>
    );
};

export default CategoryDialog;
