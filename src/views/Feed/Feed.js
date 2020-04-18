import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableHead, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { CategoryDialog } from '../../components';
import { CenteredSpinner } from '../../components/Layout';
import useSelector from '../../hooks/useSelctor';
import { productsSlector } from '../../store/selectors/products';
import CategoriesDialog from '../../components/Categories/CategoriesDialog';

const useStyles = makeStyles({
    container: {
        padding: '30px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    table: {
        maxWidth: '80vw',
        margin: '5vh auto'
    },
    dots: {
        cursor: 'pointer'
    }
});

const Feed = (props) => {
    const classes = useStyles();
    const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
    const [product, setProduct] = useState(0);
    const productsState = useSelector(productsSlector);

    const handleShowCategories = async (product) => {
        setProduct(product);
        setOpenCategoryDialog(true);
    };

    return (
        <Box className={classes.container}>
            {
                productsState.loading ?
                <CenteredSpinner />
                :
                <Box>
                    <Typography variant="h5">Products</Typography>
                    <TableContainer>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Store</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Link</TableCell>
                                <TableCell>Categories</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productsState.products.map((product) => (
                                    <TableRow key={product.product_id}>
                                        <TableCell>{product.product_id}</TableCell>
                                        <TableCell>{product.product_name}</TableCell>
                                        <TableCell>{product.store}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell>{product.product_image}</TableCell>
                                        <TableCell>{product.link}</TableCell>
                                        <TableCell>
                                            <div onClick={() => handleShowCategories(product)}>
                                                <MoreHorizIcon className={classes.dots} />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <CategoriesDialog product={product} open={openCategoryDialog} onClose={() => setOpenCategoryDialog(false)} />
                </Box>
            }
        </Box>
    )
};

export default Feed;