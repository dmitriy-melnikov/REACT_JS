import React, { Component } from 'react';

import ArticleList from './ArticleList';
import { articles } from '../fixtures';
import ArticlesChart from '../../src_result/components/ArticlesChart';

export class App extends Component{
    render() {
        return(
            <div>
                <ArticleList articles={articles}/>
                <ArticlesChart articles={this.props.articles}/>
            </div>
        )
    }
}