import React, { Component } from 'react';

import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

import Article from '../Article';
import CommentList from './CommentList';

import accordion  from '../decorators/accordeon';

/*export default function ArticleList({articles}) {
    const articleElements = articles.map(article => <li><Article article = {article}/></li>)
    return(
            <ul>
                {articleElements}
            </ul>
        )
}*/
 class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };
     /*state = {
         openArticleId: null
     };*/
    /*constructor(props)  {
        super(props);
    }*/
    getBody() {
        const {articles, openItemId, toggleOpenItem } = this.props;
        return articles.map((article) => <li key={article.id}>
            <Article
               article = {article}
               isOpen = {article.id === openItemId}
               toggleOpen = {toggleOpenItem(article.id)}
               //isOpen = {article.id === this.state.openArticleId}
               //toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
               //toggleOpen = {this.toggleOpenArticle(article.id)}//return through carry
            />
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
    //arrow function with carry
    /*toggleOpenArticle = (openArticleId) => ev => {
        this.setState({
            openArticleId
        })
    };*/
    setCommentRef = (ref) => {
        //console.log('commentRef --------',findDOMNode(ref) );
    }
}
export default accordion(ArticleList);
