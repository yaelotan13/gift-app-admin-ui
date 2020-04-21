import React, { Fragment } from 'react';
import { Menue } from '../components/Layout';

const WithMenue = (WrappedComponent) => {
    return (props) => (
        <Fragment>
            <Menue />
            <WrappedComponent {...props} />
        </Fragment>
    );
};

export default WithMenue;
