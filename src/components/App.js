import React, { Component } from 'react';

import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from "./userForm";
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
      const options = this.props.articles.map(article => {
        return {
          label: article.title,
            value: article.is
        }
      });
        return(
            <div>
                <UserForm/>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi={true}/>
                <ArticleList articles={this.props.articles}/>
                <ArticlesChart articles={this.props.articles}/>
            </div>
        )
    }
}