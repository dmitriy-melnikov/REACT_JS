import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component{
    static propTypes = {
        counter: PropTypes.number
    };
    handleIncrement = () => {
        console.log('____', 'increment');
    };
    render() {
        const {counter} = this.props;
        return(
           <div>
               <h2>{counter}</h2>
               <button onClick={this.handleIncrement}>increment</button>
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

const decorator = connect(mapStateToProps);

export default decorator(Counter)