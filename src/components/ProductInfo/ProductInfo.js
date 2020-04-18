import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSelector from '../../hooks/useSelctor';
import { productSlector } from '../../store/selectors/product';
import { fetchProductInfo } from '../../store/product/actions';
import { makeStyles } from '@material-ui/styles';
import { 
    Tab,
    Tabs,
    Box,
    Typography,
    Button
} from '@material-ui/core';

import BasicProductInfo from './BasicProductInfo';
import CategoriesInfo from './CategoriesInfo';
import { CenteredSpinner } from '../Layout';

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
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const { productId, buttonTitle } = props;
    const productInfo = useSelector(productSlector);
    
    useEffect(() => {
        dispatch(fetchProductInfo(productId));
    }, []);

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
                    productInfo.loading ?
                    <CenteredSpinner />
                    :
                    <Box>
                        <TabPanel value={value} index={0}>
                            <BasicProductInfo productInfo={productInfo} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CategoriesInfo productId={productId} />
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
