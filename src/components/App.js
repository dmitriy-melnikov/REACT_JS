import React, { Component } from 'react';

import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';

export class App extends Component{
    static propTypes = {

    };
    render() {
        return(
            <div>
                Name: <input type='text' />
                <ArticleList articles={this.props.articles}/>
                <ArticlesChart articles={this.props.articles}/>
            </div>
        )
    }
}