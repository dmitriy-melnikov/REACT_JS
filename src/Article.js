import React, { Component } from 'react';

/*export default function Article(props) {
    const article = props.article;
    return(
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
        //this.toggleOpen = this.toggleOpen.bind(this);
    }
    toggleOpen = () =>
        this.setState({
            isOpen : !this.state.isOpen
        });
    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>;
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return(
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>{isOpen ? 'close' : 'open'}</button>
                {this.getBody()}
            </div>
        )
    }
}

