import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Tab,Tabs,Box, Typography } from '@material-ui/core';
import { Checkmark } from 'react-checkmark';

import BasicProductInfo from './BasicProductInfo';
import { CenteredSpinner } from '../Layout';
import useSelector from '../../hooks/useSelctor';
import { productSlector } from '../../store/selectors/product';
import { fetchProductInfo, clearProductInfo,updateProductInfo, addNewProduct } from '../../store/product/actions';
import { fetchAllProducts } from '../../store/products/actions';
import { SingleButton } from '../../components/Layout';
import { AllCategoriesView } from '../ProductInfo/CategoriesInfo/Categories/CategoriesList';

const useStyles = makeStyles({
    tabsWrapper: {
        flexGrow: 1,
        display: 'flex',
        height: '85vh',
        justifyContent: 'flex-start',
        marginBottom: '-2vh'
    },
    root: {
        marginTop: '3vh',
        display: 'flex',
        flexDirection: 'column',
    },
    tabs: {
        borderRight: '1px solid grey',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80vw',
    },
    button: {
      width: '12vw',
    },
    checkmarkWrapper: {
        width: '80vh',
        width: '80vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    const { productId, buttonTitle, history, title } = props;
    const productInfo = useSelector(productSlector);
    const [values, setValues] = useState({ ...productInfo });
    const [imgUrl, setImgUrl] = useState(null);
    const [img, setImg] = useState(values.productImage);
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        isAddingNewProduct() ? 
        dispatch(clearProductInfo())
        :
        dispatch(fetchProductInfo(productId));
    }, []);

    useEffect(() => {
        setValues({...productInfo});
        setImg(productInfo.productImage);
        setMainCategories([...Array.from(productInfo.subCategories, category => category.main_category_id)]);
        setSubCategories([...Array.from(productInfo.subCategories, category => category.sub_category_id)]);
    }, [productInfo]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const isAddingNewProduct = () => history.location.pathname === '/add-product';

    const getAddedMainCategories = () => {
        const originaMainCategoriesIds = Array.from(productInfo.mainCategories, category => category.main_category_id);
        const mainCategoriesSet = [...new Set(mainCategories)];
        return mainCategoriesSet.filter(category => originaMainCategoriesIds.indexOf(category) < 0);
    };

    const getAddedSubCategories = () => {
        const originaSubCategoriesIds = Array.from(productInfo.subCategories, category => category.sub_category_id);
        return subCategories.filter(category => originaSubCategoriesIds.indexOf(category) < 0);
    };

    const getRemovedMainCategories = () => {
        const originaMainCategoriesIds = Array.from(productInfo.mainCategories, category => category.main_category_id);
        const mainCategoriesSet = [...new Set(mainCategories)];
        return originaMainCategoriesIds.filter(category => mainCategoriesSet.indexOf(category) < 0);
    };

    const getRemovedSubCategories = () => {
        const originaSubCategoriesIds = Array.from(productInfo.subCategories, category => category.sub_category_id);
        return originaSubCategoriesIds.filter(category => subCategories.indexOf(category) < 0);
    };

    const handleChnage = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const onFileChange = (event) => {
        setImg(event.target.files[0]);
        const url = window.URL.createObjectURL(event.target.files[0]);
        setImgUrl(url);
    };

    const onSubmit = () => {
        const product = {
            name: values.productName,
            store: values.store,
            price: values.price,
            link: values.link,
            image: img,
            addedMainCategories: [...new Set(mainCategories)],
            addedSubCategories: subCategories,
        };
        if (isAddingNewProduct()) {
            dispatch(addNewProduct(product))
        } else {
            product.addedMainCategories = getAddedMainCategories();
            product.removedMainCategories = getRemovedMainCategories();
            product.addedSubCategories = getAddedSubCategories();
            product.removedSubCategories = getRemovedSubCategories();
            dispatch(updateProductInfo(productId, product))
        }
    };

    const handleToggleSubCategory = (subCategory, mainCategory) => {
        if (subCategories.indexOf(subCategory) === -1) {
            setSubCategories(prevState => [...prevState, subCategory]);
            setMainCategories(prevState => [...prevState, mainCategory]);
        } else {
            setSubCategories(prevState => prevState.filter(category => category !== subCategory));
            setMainCategories(prevState => {
                const index = prevState.indexOf(mainCategory);
                const newState = [...prevState];
                newState.splice(index, 1);
                return newState;
            });
        }
    };

    const updateSuccess = () => {
        setTimeout(() => {
            dispatch(fetchAllProducts());
            history.push('/feed');
        }, 2000);

        return (
            <Box className={classes.checkmarkWrapper}>
                <Checkmark />
            </Box>
        );
    };

    return (
        <div className={classes.root}>
            <Box className={classes.buttonContainer}>
                <Typography variant="h5">{title}</Typography>
                <SingleButton onSubmit={onSubmit} buttonTitle={buttonTitle} variant="contained" />
            </Box>
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
                            <Tab label="Info" {...a11yProps(0)} />
                            <Tab label="Add Categories" {...a11yProps(1)} />
                        </Tabs>
                        {
                            productInfo.loading ?
                            <CenteredSpinner />
                            :
                            <Box>
                                <TabPanel value={value} index={0} key={0}>
                                    <BasicProductInfo 
                                        productInfo={values}
                                        onFileChange={onFileChange}
                                        handleChnage={handleChnage}
                                        imgUrl={imgUrl}
                                    />
                                </TabPanel>
                                <TabPanel value={value} index={1} key={1}>
                                    <AllCategoriesView toggleSelected={handleToggleSubCategory} selectedCategories={subCategories} />
                                </TabPanel>
                            </Box>
                        }
                    </Fragment>
                }
            </div>
        </div>
    )
};

export default withRouter(ProductPage);
