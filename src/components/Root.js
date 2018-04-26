import React from 'react';
import App from './App';
import store from '../strore';
import { Provider } from 'react-redux';

function Root() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

Root.propTypes = {};
export default Root

