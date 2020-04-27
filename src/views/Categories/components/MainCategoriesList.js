import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Avatar, Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        marginTop: '5vh',
        display: 'flex',
        flexWrap: 'wrap',
        width: '95%',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '3vw',
        marginBottom: '3vh',
        cursor: 'pointer',
        '&:hover': {
            opacity: '0.8'
        }
    },
    avatar: {
        height: '10vh',
        width: '8vw'
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const MainCategoriesList = (props) => {
    const classes = useStyles();
    const { categories, checked, handleToggle, handleMainCategorySelected } = props;

    return (
        <Box className={classes.container}>
            {categories.map((category) => {
                const labelId = `checkbox-list-label-${category.main_category_id}`;
                
                return (
                    <Box className={classes.item} key={category.main_category_id}>
                        <Avatar variant="square" className={classes.avatar} src={category.main_category_image}onClick={() => handleMainCategorySelected(category)} />
                        <Box className={classes.nameContainer} onClick={() => handleToggle(category)}>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(category) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            <Typography>{category.main_category_name}</Typography>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
};

export default MainCategoriesList;
