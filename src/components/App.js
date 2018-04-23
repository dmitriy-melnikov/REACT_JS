import React, { Component } from 'react';

import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from "./userForm";
import CommentForm from '../CommentForm/';
import Filters from '../filters';

export class App extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const {articles} = this.props;
        return(
            <div>
                <UserForm/>
                <CommentForm/>
                <Filters articles={articles}/>
                <ArticleList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }
}