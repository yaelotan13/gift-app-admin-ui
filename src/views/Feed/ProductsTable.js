import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    IconButton,
    Checkbox
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
        maxWidth: '80vw',
        margin: '5vh auto'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    icon: {
        cursor: 'pointer'
    }
});

const ProductsTable = (props) => {
    const classes = useStyles();
    const { products, handleEditProduct, handleShowCategories, values, toggleClicked } = props;

    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell/>
                    <TableCell>ID</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Store</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Link</TableCell>
                    <TableCell>Categories</TableCell>
                    <TableCell>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.product_id}>
                            <Checkbox
                                checked={values.indexOf(product) !== -1}
                                onChange={() => toggleClicked(product)}
                                inputProps={{ 'aria-label': 'select all desserts' }}
                            />
                            <TableCell>{product.product_id}</TableCell>
                            <TableCell>
                                <Avatar alt="product image" src={product.product_image} />
                            </TableCell>
                            <TableCell>{product.product_name}</TableCell>
                            <TableCell>{product.store}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.link}</TableCell>
                            <TableCell>
                                <div onClick={() => handleShowCategories(product)}>
                                    <MoreHorizIcon className={classes.icon} />
                                </div>
                            </TableCell>
                            <TableCell className={classes.actions}>
                                <IconButton onClick={() => handleEditProduct(product.product_id)}>
                                    <EditIcon className={classes.icon} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductsTable;
