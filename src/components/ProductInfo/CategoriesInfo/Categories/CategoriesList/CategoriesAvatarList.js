import React from 'react';
import { 
    Box, 
    ListItem, 
    ListItemAvatar, 
    Avatar,
    Checkbox,
} from '@material-ui/core';

import { ActionButtons } from '../../../../Layout';
import useCheckbox from '../../../../../hooks/useCheckbox';

const CategoriesAvatarList = (props) => {
    const [checked, handleToggle] = useCheckbox();
    const { mainCategories, selectable, onAction, onCancel, action } = props;

    return (
        <Box>
            {mainCategories.map((category) => {
                const labelId = `checkbox-list-label-${category.main_category_id}`;
                
                return (
                    <ListItem 
                        key={category.main_category_id} 
                        onClick={selectable && handleToggle(category.main_category_id)}
                        button={true && selectable}
                    >
                        {selectable &&
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(category.main_category_id) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />}
                        <ListItemAvatar>
                            <Avatar></Avatar>
                        </ListItemAvatar>
                        {category.main_category_name}
                    </ListItem>
            )})}
            {selectable && <ActionButtons onCancel={onCancel} onAction={() => onAction(checked)} action={action} />}
        </Box>
    )
};

export default CategoriesAvatarList;
