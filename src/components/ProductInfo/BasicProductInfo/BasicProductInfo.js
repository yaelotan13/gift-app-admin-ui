import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import Inputs from './Inputs';
import { Checkmark } from 'react-checkmark';
import { WithCenter } from '../../../hocs';

const useStyles = makeStyles({
    form: {
        marginLeft: '3vw',
    },
});

const BasicProductInfo = (props) => {
    const classes = useStyles();
    const { productInfo, updateSuccessful, history, onFileChange, handleChnage, imgUrl } = props;

    const updateSuccess = () => {
        setTimeout(() => {
            history.push('/feed');
        }, 2000);

        return (
            <WithCenter>
                <Checkmark />
            </WithCenter>
        );
    };

    return (
        <form className={classes.form}>
            {
                updateSuccessful ?
                updateSuccess() 
                :
                <Inputs imgUrl={imgUrl} values={productInfo} handleChnage={handleChnage} onFileChange={onFileChange} />
            }
        </form>
    );
};

export default withRouter(BasicProductInfo);
