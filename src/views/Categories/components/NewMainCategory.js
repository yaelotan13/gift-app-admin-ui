import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, IconButton, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import { Prompt, ActionButtons } from '../../../components/Layout';
import MainCategoryInput from './MainCategoryInput';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    header: {
        textAlign: 'center',
        marginTop: '2vh'
    },
    content: {
        height: '47vh',
        paddingLeft: '3vw'
    },
    buttons: {
        width: '90%',
        position: 'absolute',
        bottom: '2vh',
        margin: '0 auto'
    }
});

const NewMainCategory = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const { handleSubmit } = props;

    useEffect(() => {
        setName('');
        setImageUrl(null);
        setImageFile(null);
    }, []);

    const handleAction = () => {
        const newCategory = {
            name,
            image: imageFile
        };

        handleSubmit(newCategory);
        setOpen(false);
    };

    const handleFileChanged = (event) => {
        setImageFile(event.target.files[0]);
        setImageUrl(window.URL.createObjectURL(event.target.files[0]));
    };

    return (
        <Box className={classes.container}>
            <Prompt open={open} onCancel={() => setOpen(false)} meduim>
                <Box className={classes.content}>
                    <Typography className={classes.header}>New Category</Typography>
                    <MainCategoryInput 
                        CategoryName={name}
                        handleChnage={event => setName(event.target.value)}
                        handleFileChnage={handleFileChanged}
                        imgUrl={imageUrl}
                    />
                    <Box className={classes.buttons}>
                        <ActionButtons action="Save" onCancel={() => setOpen(false)} onAction={handleAction} />
                    </Box>
                </Box>
            </Prompt>
            <Typography>Add Main Category</Typography>
            <IconButton onClick={() => setOpen(true)}>
                <AddBoxIcon />
            </IconButton>
        </Box>
    );
};

export default NewMainCategory;