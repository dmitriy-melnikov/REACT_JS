import React from 'react';
import {render} from 'react-dom';
//import Root from './components/Root';
import Article from './Article';
import { articles } from './fixtures';

const article = articles;

render(<Article article = {article[0]}/>, document.getElementById('container'));