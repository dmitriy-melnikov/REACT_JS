import React, { Component } from 'react';

import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

import Article from './Article';
import CommentList from './CommentList';

import { articles } from '../fixtures';



/*export default function ArticleList({articles}) {
    const articleElements = articles.map(article => <li><Article article = {article}/></li>)
    return(
            <ul>
                {articleElements}
            </ul>
        )
}*/
export default class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };
    constructor(props) {
        super(props);
    }
    getBody() {
        const {articles} = this.props;
        return articles.map((article) => <li key={article.id}>
            <Article article={article}/>
            <CommentList comments={article.comments} ref={this.setCommentRef}/>
        </li>);
    }
    render() {
        return(
            <ul>
                {this.getBody()}
            </ul>
        )
    }
    setCommentRef = (ref) => {
        console.log('commentRef --------',findDOMNode(ref) );
    }
}
