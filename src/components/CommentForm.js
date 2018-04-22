import React, { Component } from 'react';

export default class CommentForm extends Component{
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

  handleChange = (type) => evt => {
    const {value} = evt.target.value;
    this.setState({
      [type]: value
    })
  };

  render() {
    return(
      <form action="" onSubmit={this.handleSubmit}>
        user: <input type="text" value={this.state.user}
                     onChange={this.handleChange('user')}
      />
        comment: <input type="text" value={this.state.text}
                     onChange={this.handleChange('text')}
      />
        <input type="submit" value='submit'/>
      </form>
    )
  }
}