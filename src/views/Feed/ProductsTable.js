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

const useStyles = makeStyles({
    table: {
        maxWidth: '80vw',
        margin: '5vh auto'
    },
    productName: {
        maxWidth: '15vw',
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    icon: {
        cursor: 'pointer'
    },
    categoriesContainer: {
        marginLeft: 12
    },
});

const ProductsTable = (props) => {
    const classes = useStyles();
    const { products, handleEditProduct, handleShowCategories, values, toggleClicked } = props;

    return (
        <TableContainer>
            <Table className={classes.table} data-cy="product-table">
                <TableHead>
                    <TableRow>
                    <TableCell/>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Store</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Categories</TableCell>
                    <TableCell>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.product_id} className={classes.row}>
                            <TableCell>
                                <Checkbox
                                    checked={values.indexOf(product) !== -1}
                                    onChange={() => toggleClicked(product)}
                                    inputProps={{ 'aria-label': 'select all desserts' }}
                                />
                            </TableCell>
                            <TableCell>
                                <Avatar alt="product image" src={product.product_image} />
                            </TableCell>
                            <TableCell className={classes.productName}>{product.product_name}</TableCell>
                            <TableCell>{product.store}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleShowCategories(product)} className={classes.categoriesContainer}>
                                    <MoreHorizIcon className={classes.icon} />
                                </IconButton>
                            </TableCell>
                            <TableCell>
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
