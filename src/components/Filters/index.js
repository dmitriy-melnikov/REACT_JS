import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectFilter from './Select';
import DateRange from './DateRange';

export default class Filters extends Component{
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        //const { articles } = this.props;
        return(
            <div>
                <DateRange/>
                <SelectFilter/>
                {/*<SelectFilter articles={articles}/>*/}
            </div>
        )
    }
}