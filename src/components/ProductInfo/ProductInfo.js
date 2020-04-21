import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { 
    Tab,
    Tabs,
    Box,
    Typography,
    Button
} from '@material-ui/core';
import { Checkmark } from 'react-checkmark';

import BasicProductInfo from './BasicProductInfo';
import CategoriesInfo from './CategoriesInfo';
import NewProductCategoriesInfo from './CategoriesInfo/NewProductCategoriesInfo';
import { CenteredSpinner } from '../Layout';
import useSelector from '../../hooks/useSelctor';
import { productSlector } from '../../store/selectors/product';
import { fetchProductInfo, clearProductInfo,updateProductInfo, addNewProduct } from '../../store/product/actions';
import { fetchAllProducts } from '../../store/products/actions';
import { WithCenter } from '../../hocs';

const useStyles = makeStyles({
    tabsWrapper: {
        flexGrow: 1,
        display: 'flex',
        height: '85vh',
        justifyContent: 'flex-start',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    center: {
        height: '50vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabs: {
        borderRight: '1px solid grey',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3vh'
    },
    button: {
      width: '12vw',
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
}

const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ProductPage = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const { productId, buttonTitle, history } = props;
    const productInfo = useSelector(productSlector);
    const [values, setValues] = useState({ ...productInfo });
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        isAddingNewProduct() ? 
        dispatch(clearProductInfo())
        :
        dispatch(fetchProductInfo(productId));
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const isAddingNewProduct = () => history.location.pathname === '/add-product';

    const handleChnage = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const onFileChange = (event) => {
        const url = window.URL.createObjectURL(event.target.files[0]);
        setImgUrl(url);
    };

    const onSubmit = () => {
        const currentProduct = {
            name: values.productName,
            store: values.store,
            price: values.price,
            link: values.link,
            image: 'testImage',
            // image: imgUrl ? imgUrl : values.productImage,
            subCategories: productInfo.subCategories,
            mainCategories: productInfo.mainCategories
        };

        isAddingNewProduct() ? 
        dispatch(addNewProduct(currentProduct))
        :
        dispatch(updateProductInfo(productId, currentProduct))
    };

    const updateSuccess = () => {
        setTimeout(() => {
            dispatch(fetchAllProducts());
            history.push('/feed');
        }, 2000);

        return (
            <WithCenter>
                <Checkmark />
            </WithCenter>
        );
    };

    return (
        <div className={classes.root}>
            <div className={classes.tabsWrapper}>
                {
                    productInfo.updateSuccess ? 
                    updateSuccess()
                    :
                    <Fragment>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="products sections tabs"
                            className={classes.tabs}
                        >
                            <Tab label="ProductInfo" {...a11yProps(0)} />
                            <Tab label="Categories" {...a11yProps(1)} />
                        </Tabs>
                        {
                            productInfo.loading ?
                            <CenteredSpinner />
                            :
                            <Box>
                                <TabPanel value={value} index={0}>
                                    <BasicProductInfo 
                                        productInfo={values}
                                        onFileChange={onFileChange}
                                        handleChnage={handleChnage}
                                        imgUrl={imgUrl}
                                        // updateSuccessful={productInfo.updateSuccess}
                                    />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    {isAddingNewProduct() ? <NewProductCategoriesInfo /> : <CategoriesInfo productId={productId} />}
                                </TabPanel>
                            </Box>
                        }
                    </Fragment>
                }
            </div>
            <Box className={classes.buttonContainer}>
                <Button variant="contained" color="secondary" className={classes.button} onClick={onSubmit}>
                    {buttonTitle}
                </Button>
            </Box>
        </div>
    )
};

export default withRouter(ProductPage);
