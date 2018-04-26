import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordeon';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors';

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
        articles: PropTypes.array.isRequired,
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props;
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id === openItemId}
                toggleOpen={toggleOpenItem(article.id)}
                //isOpen = {article.id === this.state.openArticleId}
                //toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
                //toggleOpen = {this.toggleOpenArticle(article.id)}//return through carry
            /></li>);
        //console.log('____________', 'update article list');
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    //arrow function with carry
    /*toggleOpenArticle = (openArticleId) => ev => {
        this.setState({
            openArticleId
        })
    };*/
}
//before implementation filters
/*export default connect(state => ({
    articles: state.articles
}))(accordion(ArticleList));*/

//filter in connect
/*export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters;

    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from ||  !to || (published > from && published < to))
    });

    return {
        articles: filteredArticles
    }
})(accordion(ArticleList))*/

//filter in reselect

export default connect(state => {
    return {
        articles: filtratedArticlesSelector(state)
    }
})(accordion(ArticleList))
