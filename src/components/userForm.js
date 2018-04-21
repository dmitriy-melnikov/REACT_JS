import React, { Component } from 'react';

export default class UserForm extends Component{
  state = {
    userName: ''
  };

  handleChange = ev => {
    this.setState({
      userName: ev.target.value
    });
    console.log(this.state.userName);
  };

  render() {
    return(
        <div>
          Name: <input type="text" value={this.state.userName} onChange={this.handleChange}/>
        </div>
      )

  }

}