import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CommentList from '../CommentList';

import accordion from '../../decorators/accordeon';
import {CSSTransitionGroup} from 'react-transition-group';
import {deleteArticle} from '../../AC';


import './style.css';

import toggleOpen from '../../decorators/toggleOpen';

/*export default function Article(props) {
    const article = props.article;
    return(
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string,
            title: PropTypes.string.isRequired,
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    state = {
        updateIndex: 0
    };

    constructor(props) {
        super(props);
        /* this.state = {
            isOpen: true
        };*/// in decorator toggleOpen
        //this.toggleOpen = this.toggleOpen.bind(this);
    }

    /*toggleOpen = (ev) =>{
        console.log(ev.nativeEvent);
        ev.preventDefault();
        this.setState({
            isOpen : !this.state.isOpen
        });
    };*/// in decorator toggleOpen
    /* componentWillReceiveProps(nextProps) {
         //console.log('____', 'updating', this.props.isOpen, nextProps.isOpen);
     }*/
    /* componentWillMount() {
         //console.log('component ______________mounting');
     }*/

    /* shouldComponentUpdate(nextProps, nextState) {
         return nextProps.isOpen !== this.props.isOpen;
     }*/

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        //console.log('_______', 'update article');
        //const {isOpen} = this.state;
        return (
            <div ref={this.setContainerRev}>
                {/*{new Date().toLocaleString()}*/}
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
                <button onClick={this.handleDelete}>delete article</button>
                <CSSTransitionGroup component="header"
                                    transitionName="article"
                                    transitionEnterTimeout={3000}
                                    transitionLeaveTimeout={5000}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
        //console.log('_____________', 'deleting article')
    };
    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments} ref={this.setCommentRef}/>
            </section>
        );
    };

    setContainerRev = (ref) => {
        this.container = ref;
        //console.log(ref);
    };
    setCommentRef = (ref) => {
        //console.log('commentRef --------',findDOMNode(ref) );
    }
    /* componentDidMount() {
         //console.log('component ______mounted');
     }*/
}

export default connect(null, {deleteArticle})(Article);

