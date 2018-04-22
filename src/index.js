import React from 'react';
import {render} from 'react-dom';
import { App } from './components/App';
import {articles} from './fixtures';
import store from './strore';

render(
    <App articles={articles}/>, document.getElementById('container'));