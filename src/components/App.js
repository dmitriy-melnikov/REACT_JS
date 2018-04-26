import React, { Component } from 'react';

import ArticleList from './ArticleList';
import UserForm from './userForm';
import Filters from './Filters';
import Counter from './Counter';

class App extends Component{
    render() {
        return(
            <div>
                <Counter/>
                <UserForm/>
                <Filters articles={[]}/>
                <ArticleList/>
            </div>
        )
    }
}
export default App