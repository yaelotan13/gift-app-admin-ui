import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    Tab,
    Tabs,
    Box,
    Typography,
    CircularProgress,
    Button
} from '@material-ui/core';

import { categoriesService, productService } from '../../services';
import BasicProductInfo from './BasicProductInfo';
import CategoriesInfo from './CategoriesInfo';

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
          marginTop: '2vh'
      },
      button: {
        width: '15vw',
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

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ProductPage = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);
    const [productInfo, setProductInfo] = useState({});
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const { productId, buttonTitle } = props;

    useEffect(() => {
        setLoading(true);
        if (productId) {
            (async () => {
                const receivedProductInfo = await productService.getProductById(productId);
                const receivedCategories = await categoriesService.getCategories(productId);
                setMainCategories(receivedCategories.main);
                setSubCategories(receivedCategories.sub);
                setProductInfo(receivedProductInfo);
                setLoading(false);
            })();
        }
    }, [productId]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.tabsWrapper}>
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
                    loading ?
                    <Box className={classes.center}>
                        <CircularProgress />
                    </Box>
                    :
                    <Box>
                        <TabPanel value={value} index={0}>
                            <BasicProductInfo productInfo={productInfo}/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CategoriesInfo mainCategories={mainCategories} subCategories={subCategories} productId={productId} />
                        </TabPanel>
                    </Box>
                }
            </div>
            <Box className={classes.buttonContainer}>
                <Button variant="contained" color="secondary" className={classes.button}>
                    {buttonTitle}
                </Button>
            </Box>
        </div>
    )
};

export default ProductPage;
