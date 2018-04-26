import React, {Component} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    /*constructor(props){
        super(props);
    }*/
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };
    static defaultProps = {
        comments: []
    };
    /*state = {
        isOpen: false
    };*/

    /*toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };*/
    getBody() {
        const {comments, isOpen} = this.props;
        if (!isOpen) return null;
        return comments.map(id => <li key={id}>{<Comment id={id}/>}</li>)
    }
    render() {
        const {isOpen, toggleOpen, comments} = this.props;
        if (!comments.length) {
            return (
                <div>
                    <p>No comments yet</p>
                    <CommentForm/>
                </div>
            )
        }
        return (
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