import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component{
    static propTypes = {
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    };
    static defaultProps = {
        comment: {}
    };
    state = {

    };
    render(){
        const {comment} = this.props;
        return(
            <div>
                <h3>{comment.user}</h3>
                <p>{comment.text}</p>
            </div>
        )
    }
}
export default Comment;