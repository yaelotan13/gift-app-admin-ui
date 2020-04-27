import React, { Fragment } from 'react';
import { Menu } from '../components/Layout';

const WithMenu = (WrappedComponent) => {
    return (props) => (
        <Fragment>
            <Menu />
            <WrappedComponent {...props} />
        </Fragment>
    );
};

export default WithMenu;
