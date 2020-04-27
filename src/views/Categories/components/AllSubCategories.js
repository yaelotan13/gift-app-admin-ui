import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, ListItem, ListItemIcon, Checkbox, ListItemText } from '@material-ui/core';

import { ActionButtons } from '../../../components/Layout';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    item: {
        width: '70%'
    }
});

const AllSubCategories = (props) => {
    const classes = useStyles();
    const { categories, handleCancel, handleAction } = props;
    const [checked, setChecked] = useState([]);

    const handleToggle = (category) => {
        if (checked.indexOf(category) === -1) {
            setChecked((prevChecked) => {
                return [...prevChecked, category];
            })
        } else {
            setChecked((prevChecked) => {
                return prevChecked.filter((check) => check.sub_category_id !== category.sub_category_id);
            })
        }
    };

    return (
        <Box className={classes.container}>
            {categories.map((category) => 
                <ListItem key={category.sub_category_id} onClick={() => handleToggle(category)} className={classes.item}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(category) !== -1}
                            tabIndex={-1}
                            disableRipple
                            //inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </ListItemIcon>
                    <ListItemText primary={category.sub_category_name} />
                </ListItem>
            )}
            <ActionButtons onCancel={handleCancel} onAction={() => handleAction(checked)} action="Add" />
        </Box>
    );
};

export default AllSubCategories;
