import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { Prompt, ActionButtons } from '../../../components/Layout';

const useStyles = makeStyles({
    icon: {
        transition: 'color 1s'
    },
    coloredIcon: {
        color: 'blue'
    },
    qustion: {
        padding: 16,
        textAlign: 'center',
        marginBottom: '5vh',
    }
});

const DeleteMainCategory = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { categories, handleDelete } = props;

    const getCategoriesNames = () => Array.from(categories, category => category.main_category_name).join(', ');

    const closePrompt = () => setOpen(false);

    return (
        <Box>
            <Prompt open={open} onCancel={closePrompt} title="delete main categories">
                <Typography className={classes.qustion}>
                    <b>Permanently</b> delete {getCategoriesNames()} from main categories?
                </Typography>
                <ActionButtons action="Delete" onCancel={closePrompt} onAction={handleDelete} />
            </Prompt>
            <IconButton onClick={() => setOpen(true)} disabled={categories.length === 0}>
                <DeleteIcon className={categories.length > 0 ? classes.coloredIcon : classes.icon} />
            </IconButton>
        </Box>
    );
};

export default DeleteMainCategory;