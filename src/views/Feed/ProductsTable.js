import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    table: {
        maxWidth: '80vw',
        margin: '5vh auto'
    },
    icon: {
        cursor: 'pointer'
    }
});

const ProductsTable = ({ products, handleEditProduct, handleShowCategories }) => {
    const classes = useStyles();

    return (
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
                    <TableCell>Edit</TableCell>
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
                                <div onClick={() => handleShowCategories(product)}>
                                    <MoreHorizIcon className={classes.icon} />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div onClick={() => handleEditProduct(product.product_id)}>
                                    <EditIcon className={classes.icon} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductsTable;
