import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Box, Tabs, Tab, Typography } from '@material-ui/core';

import { WithMenu } from '../../hocs';
import MainCategory from './MainCategory/MainCategory'; // TODO fix path
import SubCategory from './SubCategory/SubCategory';
import useSelector from '../../hooks/useSelctor';
import { categoriesSlector } from '../../store/selectors/categories';

const useStyles = makeStyles({
    root: {
        marginTop: '3vh',
        marginLeft: 240,
        display: 'flex',
        height: '85vh',
    },
    tabs: {
        borderRight: '1px solid grey',
    },
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

const Category = (props) => {
    const classes = useStyles();
    const categoriesState = useSelector(categoriesSlector);
    const [value, setValue] = useState(0);
    const { location, history } = props;
    const categoryId = location.search.slice(location.search.indexOf('=') + 1);
    const isAddingNewCategory = () => history.location.pathname === '/add-category';

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmitSubCategory = (subCategoryInfo) => {
        console.log(subCategoryInfo);
    };

    const handleSubmitMainCategory = (mainCategoryInfo) => {
        console.log(mainCategoryInfo);
    };

    return (
        <Box className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleTabChange}
                aria-label="products sections tabs"
                className={classes.tabs}
            >
                <Tab label="main category" {...a11yProps(0)} />
                <Tab label="sub categoey" {...a11yProps(1)} />
            </Tabs>
            <Box>
                <TabPanel value={value} index={0}>
                    <MainCategory categoryId={categoryId} onSubmit={handleSubmitMainCategory} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SubCategory onSubmit={handleSubmitSubCategory} />
                </TabPanel>
            </Box>
        </Box>
    )
};

export default withRouter(WithMenu(Category));
