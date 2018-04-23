import React, { Component } from 'react';

import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from "./userForm";
import CommentForm from '../components/CommentForm';
import Filters from './Filters';
import Counter from './Counter';

export class App extends Component{
    constructor(props){
        super(props)
    }

    render() {
        //const {articles} = this.props;
        return(
            <div>
                <UserForm/>
                <CommentForm/>
                <Filters articles={[]}/>
                <Counter/>
                <ArticleList/>
            </div>
        )
    }
}