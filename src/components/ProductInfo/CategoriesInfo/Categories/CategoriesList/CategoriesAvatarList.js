import React from 'react';
import { 
    Box, 
    ListItem, 
    ListItemAvatar, 
    Avatar,
    Checkbox,
} from '@material-ui/core';

import { ActionButtons } from '../../../../Layout';
import useSelectable from '../../../../../hooks/useSelectable';

const CategoriesAvatarList = (props) => {
    const [checked, handleToggle] = useSelectable();
    const { mainCategories, selectable, onAction, onCancel, action } = props;

    return (
        <Box>
            {mainCategories.map((category) => {
                const labelId = `checkbox-list-label-${category.main_category_id}`;
                
                return (
                    <ListItem 
                        key={category.main_category_id} 
                        onClick={selectable && handleToggle(category)}
                        button={true && selectable}
                    >
                        {selectable &&
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(category) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />}
                        <ListItemAvatar>
                            <Avatar src={category.main_category_image}></Avatar>
                        </ListItemAvatar>
                        {category.main_category_name}
                    </ListItem>
            )})}
            {selectable && <ActionButtons onCancel={onCancel} onAction={() => onAction(checked)} action={action} />}
        </Box>
    )
};

export default CategoriesAvatarList;
