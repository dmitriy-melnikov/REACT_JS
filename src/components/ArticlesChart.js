import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ArticlesChart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return(
            <div ref= 'chart'>

            </div>
        )
    }

    /*componentWillUnmount() {

    }*/

}

