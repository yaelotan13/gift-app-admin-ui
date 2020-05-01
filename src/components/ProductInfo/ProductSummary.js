import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Avatar, Card } from '@material-ui/core';

import { SubCategoriesList } from '../../views/Categories/components';

const useStyles = makeStyles({
    wrapper: {
        marginLeft: '3vw',
    },
    container: {
        width: '15vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    mainCategoriesContainer: {
        display: 'flex',
        width: '80vw',
        flexWrap: 'wrap'
    },
    mainCategory: {
        marginLeft: '10vw',
        marginTop: '3vh'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '10vw',
        marginTop: '3vh'
    }
});

const ProductSummary = (props) => {
    const classes = useStyles();
    const { name, img, productInfo, handleDelete } = props;
    console.log(productInfo);

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.container}>
                <Avatar src={img} />
                <Typography variant="body2">{name}</Typography>
            </Box>
            <Typography>Sub Categories:</Typography>
            <Box className={classes.mainCategoriesContainer}>
                {productInfo.mainCategories.map(mainCategory =>
                    <Card className={classes.card}>
                        {/* <Avatar src={mainCategory.main_category_image} key={mainCategory.main_category_id} className={classes.mainCategory} /> */}
                        <Typography>{mainCategory.main_category_name}</Typography>
                    </Card>
                )}
            </Box>
        </Box>
    );
};

export default ProductSummary;