import React, { Component } from 'react';


import Select from 'react-select';
import 'react-select/dist/react-select.css';


import PropTypes from 'prop-types';

class SelectFilter extends Component{
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
                <Select
                    options={options}
                    value={this.state.selection}
                    onChange={this.changeSelection}
                    multi={true}/>
        )
    }
}
export default SelectFilter