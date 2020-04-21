import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom';
import { url } from '../../config/clientUrl';

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

const Menue = (props) => {
    const classes = useStyles();

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
            {['Home', 'New product'].map((text, index) => (
                <Link to={index === 0 ? '/feed' : 'add-product'} className={classes.link}>
                    <ListItem button key={text}>
                        <Link to={index === 0 ? '/feed' : '/add-product'} />
                        <ListItemIcon>{index === 0 ? <HomeIcon /> : <AddCircleOutlineIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                </Link>
            ))}
            </List>
        </Drawer>
    );
};

export default Menue;
