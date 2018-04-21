import React, { Component } from 'react';

import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from "./userForm";

export class App extends Component{
    static propTypes = {

    };
    render() {
        return(
            <div>
                <UserForm/>
                <ArticleList articles={this.props.articles}/>
                <ArticlesChart articles={this.props.articles}/>
            </div>
        )
    }
}