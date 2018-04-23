import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('event submit', evt.target);
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
    ? 'form-input__error' : '';

    handleChange = (type) => evt => {
        const {value} = evt.target.value;
        if (value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    };

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                user: <input type="text" value={this.state.user}
                             onChange={this.handleChange('user')}
                             className={this.getClassName('user')}
            />
                comment: <input type="text" value={this.state.text}
                                onChange={this.handleChange('text')}
                                className={this.getClassName('user')}
            />
                <input type="submit" value='submit'/>
            </form>
        )
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
};