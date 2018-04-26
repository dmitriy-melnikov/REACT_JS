import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { changeSelection } from '../../AC';

import 'react-select/dist/react-select.css';

import PropTypes from 'prop-types';

class SelectFilter extends Component{
    static propTypes = {
        //articles: PropTypes.array.isRequired
    };
    /*state = {
        selection: null
    };*/
    /*changeSelection = (selection) => this.setState({
        selection
    });*/

    handleChange = selected => this.props.changeSelection(selected.map(options => options.value));

    render() {
        const {articles, selected} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return(
                <Select
                    options = { options }
                    //value={this.state.selection}
                    value = { selected }
                    //onChange={this.changeSelection}
                    multi = {true}
                    onChange={this.handleChange}
                   />
        )
    }
}
//here is mistake
export default connect(state => ({
        selected: state.filters.selected,
        articles: state.articles
}), { changeSelection })(SelectFilter)