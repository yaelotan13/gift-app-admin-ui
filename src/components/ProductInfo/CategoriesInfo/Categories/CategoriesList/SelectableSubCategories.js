import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import useSelectable from '../../../../../hooks/useSelectable';
import { ActionButtons } from '../../../../Layout';
import SubCategory from '../SubCategory';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    listWrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    }
});

const SelectableSubCategories = (props) => {
    const classes = useStyles();
    const [checked, handleToggle] = useSelectable();
    const { subCategories, onAction, onCancel, action } = props;
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.listWrapper}>
                {subCategories.map((category) => (
                    <SubCategory 
                        key={category.sub_category_id}
                        title={category.sub_category_name}
                        handleClick={handleToggle(category.sub_category_id)}
                        selected={checked.indexOf(category.sub_category_id) !== -1}
                    />
                ))}
            </Box>
            <ActionButtons onCancel={onCancel} onAction={() => onAction(checked)} action={action} />
        </Box>
    );
};

export default SelectableSubCategories;
