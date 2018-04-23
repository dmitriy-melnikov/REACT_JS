import React from 'react';
import {render} from 'react-dom';
import {articles} from './fixtures';
import Root from './components/Root';

render(
    <Root />, document.getElementById('container'));