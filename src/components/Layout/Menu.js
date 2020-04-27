import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import RedeemIcon from '@material-ui/icons/Redeem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    drawer: {
        width: 240
    },
    drawerPaper: {
        width: 240
    },
    list: {
        marginTop: 20
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
});

const Menu = (props) => {
    const classes = useStyles();

    const getPath = (index) => {
        switch (index) {
            case 0: {
                return '/feed';
            }
            case 1: {
                return '/add-product';
            }
            case 2: {
                return '/categories';
            }
        }
    };

    const getIcon = (index) => {
        switch (index) {
            case 0: {
                return <HomeIcon />;
            }
            case 1: {
                return <RedeemIcon />;
            }
            case 2: {
                return <CategoryIcon />;
            }
        }
    }
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <List className={classes.list}>
            {['Home', 'New Product', 'Categories'].map((text, index) => (
                <Link to={getPath(index)} className={classes.link}>
                    <ListItem button key={text}>
                        <ListItemIcon>{getIcon(index)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                </Link>
            ))}
            </List>
        </Drawer>
    );
};

export default Menu;
