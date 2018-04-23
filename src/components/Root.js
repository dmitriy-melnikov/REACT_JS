import React from 'react';
import { App } from './App';
import PropTypes from 'prop-types';
import store from '../strore';
import { Provider } from 'react-redux';

function Root(props) {
    return (
        <Provider store={store}>
            <App {...props}/>
        </Provider>
    )
}

Root.propTypes = {};
export default Root

