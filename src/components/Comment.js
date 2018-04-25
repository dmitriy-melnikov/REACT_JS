import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelector } from '../selectors';

class Comment extends Component{
    static propTypes = {
        id: PropTypes.string.isRequired,
        //from connect
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    };
    /*static defaultProps = {
        comment: {}
    };*/
    render(){
        const {comment} = this.props;
        return(
            <div>
                <p>{comment.text} <b>by {comment.user}</b></p>


            </div>
        )
    }
}
export default connect((state, ownProps) => {
    console.log('____________', state.comments, ownProps);
    return {comment: commentSelector(state, ownProps)}
})(Comment);