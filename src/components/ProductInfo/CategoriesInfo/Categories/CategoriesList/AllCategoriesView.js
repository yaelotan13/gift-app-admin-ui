import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import { Box, Card, ExpansionPanelDetails, Typography, Chip } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import useSelector from '../../../../../hooks/useSelctor';
import { categoriesSlector } from '../../../../../store/selectors/categories';

const useStyles = makeStyles({
    conatainer: {
        display: 'flex',
        width: '60vw',
        flexWrap: 'wrap'
    },
    card: {
        width: '35vw',
        marginBottom: '2vh',
        marginLeft: '3vw',
    },
    subCategoriesContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    subCategory: {
        marginRight: '1vw',
        marginTop: '1vh'
    },
    selectedSubCategory: {
        border: '1px solid blue'
    }
});

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);

const compare = (a, b) => {
    const categoryA = a.sub_category_name.toUpperCase();
    const categoryB = b.sub_category_name.toUpperCase();

    let comparison = 0;
    if (categoryA > categoryB) {
        comparison = 1;
    } else if (categoryA < categoryB) {
        comparison = -1;
    }
    return comparison;
};

const AllCategoriesView = (props) => {
    const classes = useStyles();
    const categoriesState = useSelector(categoriesSlector);
    let { mainCategories, subCategories } = {...categoriesState};
    const { toggleSelected, selectedCategories } = props;

    useEffect(() => {
        mainCategories = categoriesState.mainCategories;
        subCategories = categoriesState.subCategories;
    }, [categoriesState]);

    const getSubCategories = mainCategoryId => subCategories.filter(category => category.main_category_id === mainCategoryId).sort(compare);

    return (
        <Box className={classes.conatainer}>
            {mainCategories.map(mainCategory => 
                <Card className={classes.card} key={mainCategory.main_category_id}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                        <Typography>{mainCategory.main_category_name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Box className={classes.subCategoriesContainer}>
                            {getSubCategories(mainCategory.main_category_id).map(subCategory => 
                                <Chip
                                    className={selectedCategories.indexOf(subCategory.sub_category_id) !== -1 ? [classes.subCategory, classes.selectedSubCategory].join(' ') : classes.subCategory}
                                    label={subCategory.sub_category_name}
                                    clickable
                                    onClick={() => toggleSelected(subCategory.sub_category_id, mainCategory.main_category_id)}
                                />
                            )}
                        </Box>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
            )}
        </Box>
    );
};

export default AllCategoriesView;