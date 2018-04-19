import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    /*constructor(props){
        super(props);
    }*/
    static defaultProps = {
        comments: []
    };
    state = {
        isOpen: false
    };
    /*toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };*/
    getBody(){
        const {comments, isOpen} = this.props;
        if(!isOpen) return null;
        return comments.map(comment => <li key={comment.id}>{<Comment comment={comment}/>}</li>)
    }
    render() {
        const {isOpen, toggleOpen} = this.props;
        return(
            <div>
                <button onClick={toggleOpen}>{isOpen ? 'close comment' : 'open comment'}</button>
                <ul>
                    {this.getBody()}
                </ul>
            </div>
        )
    }
}
export default toggleOpen(CommentList);