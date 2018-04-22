import React, { Component } from 'react';

import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from "./userForm";
import CommentForm from './CommentForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export class App extends Component{
    static propTypes = {

    };
    state = {
      selection: null
    };

    changeSelection = (selection) => this.setState({
      selection
    });

    render() {
      const {articles} = this.props;
      const options = articles.map(article => {
        return {
          label: article.title,
          value: article.id
        }
      });
        return(
            <div>
                <UserForm/>
                <CommentForm/>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi={true}/>
                <ArticleList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }
}