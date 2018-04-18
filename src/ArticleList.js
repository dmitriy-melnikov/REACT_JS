import React, { Component } from 'react';

import Article from './Article';



/*export default function ArticleList({articles}) {
    const articleElements = articles.map(article => <li><Article article = {article}/></li>)
    return(
            <ul>
                {articleElements}
            </ul>
        )
}*/
export default class ArticleList extends Component {
    constructor(props) {
        super(props);
    }
    getBody() {
        const {articles} = this.props;
        return articles.map((article) => <li key={article.id}><Article article={article}/></li>);
    }
    render() {
        return(
            <ul>
                {this.getBody()}
            </ul>
        )
    }
}
