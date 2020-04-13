import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Table, TableBody, TableHead, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { productService } from '../../services'
import CategoryDialog from '../../components/CategoryDialog';

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
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
    const [productId, setProductId] = useState(0);

    useEffect(() => {
        (async () => {
            const response = await productService.getProducts();
            console.log(response);
            setProducts(response.data);
            setLoading(false);
        })();    
    }, []);

    const handleShowCategories = async (productId) => {
        setProductId(productId);
        setOpenCategoryDialog(true);
    };

    return (
        <Box className={classes.container}>
            {
                loading ?
                <Box className={classes.center}>
                    <CircularProgress /> 
                </Box>
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
                                {products.map((product) => (
                                    <TableRow key={product.product_id}>
                                        <TableCell>{product.product_id}</TableCell>
                                        <TableCell>{product.product_name}</TableCell>
                                        <TableCell>{product.store}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell>{product.product_image}</TableCell>
                                        <TableCell>{product.link}</TableCell>
                                        <TableCell>
                                            <div onClick={() => handleShowCategories(product.product_id)}>
                                                <MoreHorizIcon className={classes.dots} />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <CategoryDialog productId={productId} open={openCategoryDialog} onClose={() => setOpenCategoryDialog(false)} />
                </Box>
            }
        </Box>
    )
};

export default Feed;