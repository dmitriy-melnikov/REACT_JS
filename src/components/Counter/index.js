import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../../AC';

class Counter extends Component{
    static propTypes = {
        counter: PropTypes.number
    };
    handleIncrement = () => {
        //this.props.increment();
        /*this.props.dispatch({
            type: 'INCREMENT'
        })*/
        const { increment } = this.props;
        increment();
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

/*
function mapStateToProps(state) {
    return {
        counter: state.count
    }
}
const mapToDispatch = {
    increment
};
const decorator = connect(mapStateToProps, mapToDispatch);
export default decorator(Counter)*/

export default connect((state) => ({
    counter: state.count
}), {increment})(Counter)