import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Input, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
    imageUpload: {
        display: 'flex',
        flexDirection: 'column'
    },
    img: {
        marginTop: '1vh',
        width: '12vw',
        height: '15vh',
        border: `1px solid ${grey[300]}`,
        borderRadius: 5,
    },
});

const FileUploader = (props) => {
    const classes = useStyles();
    const { onFileChange, imgUrl, image } = props;

    return (
        <Box className={classes.imageUpload}>
            <Box>
                <Typography>Image: {image}</Typography>
                <Input type="file" disableUnderline={true} onChange={(event) => onFileChange(event)} />
            </Box>
            {imgUrl && <img src={imgUrl} className={classes.img}/>}
        </Box>
    );
};

export default FileUploader;
