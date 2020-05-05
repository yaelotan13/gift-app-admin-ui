import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Menu, MenuItem, IconButton, Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { logout } from '../../store/user/actions';

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        left: '95%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    avatar: {
        width: 26,
        height: 26
    },
    menu: {
        marginTop: 15
    },
    item: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
    },
    downArrow: {
        color: '#888888'
    },
    exitIcon: {
        marginLeft: '1vw'
    }
});

const WelcomeUser = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(false);
    const { userName, history } = props;

    const toggleClicked = (event) => {
        if (!anchorEl) {
            setAnchorEl(event.currentTarget);
        } else {
            setAnchorEl(null);
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        console.log('logging out..')
        dispatch(logout());
    };

    return (
        <Box className={classes.container} onClick={toggleClicked}>
            <Avatar className={classes.avatar} />
            <ArrowDropDownIcon className={classes.downArrow} />
            <Menu
                id="user menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                <MenuItem onClick={handleLogOut} className={classes.item}>
                    <Typography>Log Out</Typography>
                    <IconButton onClick={handleLogOut} data-cy="logout-button">
                        <ExitToAppIcon className={classes.exitIcon} />
                    </IconButton>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default withRouter(WelcomeUser);