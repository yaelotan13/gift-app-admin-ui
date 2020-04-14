import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { 
    Dialog, 
    DialogTitle, 
    CircularProgress, 
    Box, 
    List, 
    ListItem, 
    Typography, 
    ListItemAvatar, 
    Avatar, 
    Button
} from '@material-ui/core';

import { categoriesService } from '../services';

const useStyles = makeStyles({
    wrapper: {
        width: '30vw',
        padding: '2vh 3vw',
        borderRadius: 5,
    },
    center: {
        textAlign: 'center',
    },
    mainCategoryHeader: {
        marginBottom: '1vh',
    },
    subCtegoryHeader: {
        margin: '3vh 0 1vh 0',
    },
    subCategoriesContainer: {
        width: '25vw',
        display: 'flex',
        flexWrap: 'warp',
    },
    subCategory: {
        border: '1px solid black',
        borderRadius: 20,
        marginRight: '1vw',
        padding: '0 16px',
        textAlign: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        textAlign: 'center',
        marginTop: '3vh'
    }
});

const CategoryDialog = (props) => {
    const classes = useStyles();
    const { open, onClose, history } = props;
    const { product_id, product_name } = { ...props.product };
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (product_id) {
            (async () => {
                setLoading(true);
                const categories = await categoriesService.getCategories(product_id);
                console.log(categories);
                setCategories(categories);
                setLoading(false);
            })();
        }
    }, [product_id]);
    
    const handleClick = () => {
        history.push(`/edit/?product_id=${product_id}`);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <Box className={classes.wrapper}>
                {
                    loading ?
                <CircularProgress />
                :
                <Fragment>
                    <DialogTitle className={classes.center}>{product_name}</DialogTitle>
                    <List>
                        <Typography variant="body1" className={classes.mainCategoryHeader}>Main Categories</Typography>
                        {categories.main.map((category) => (
                            <ListItem key={category.main_category_id}>
                                <ListItemAvatar>
                                    <Avatar></Avatar>
                                </ListItemAvatar>
                                {category.main_category_name}
                            </ListItem>
                        ))}
                        <Typography variant="body1" className={classes.subCtegoryHeader}>
                            Sub Categories
                        </Typography>
                        <Box className={classes.subCategoriesContainer}>
                            {categories.sub.map((category) => (
                                <ListItem key={category.sub_category_id} className={classes.subCategory}>
                                    <Typography variant="body2">{category.sub_category_name}</Typography>
                                </ListItem>
                            ))}
                        </Box>
                    </List>
                </Fragment>
                }
                <Box className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" onClick={handleClick}>EDIT</Button>
                </Box>
            </Box>
        </Dialog>
    );
};

export default withRouter(CategoryDialog);
