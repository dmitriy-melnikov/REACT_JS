import React, { Component } from 'react';
import PropTypes from 'prop-types';

import toggleOpen from '../decorators/toggleOpen';

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
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    };
    constructor(props) {
        super(props);
        /*this.state = {
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

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return <section>{article.text}</section>;
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        //const {isOpen} = this.state;
        return(
            <div>
                {new Date().toLocaleString()}
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
                {this.getBody()}
            </div>
        )
    }
}

export default toggleOpen(Article);

