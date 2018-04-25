import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from '../components/Article';
import accordion from '../decorators/accordeon';
import {connect} from 'react-redux';
import { filtratedArticlesSelector } from '../selectors';

import CommentList from './CommentList';
import {findDOMNode} from 'react-dom';

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

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props;
        console.log(articles);
        const articleElement = articles.map(article => <li key={article.id}>
            <Article
                article={ article }
                isOpen={ article.id === openItemId }
                toggleOpen={ toggleOpenItem(article.id) }
                //isOpen = {article.id === this.state.openArticleId}
                //toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
                //toggleOpen = {this.toggleOpenArticle(article.id)}//return through carry
            />
            <CommentList comments={article.comments} ref={this.setCommentRef}/>
        </li>);
        console.log('____________', 'update article list');
        return (
            <ul>
                {articleElement}
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

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state)
    }
})(accordion(ArticleList));
