import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 

export default class StrictAcess extends Component {
  render() {
    const { username, password } = this.props.user;

    if (!(username === 'João' && password === 1234)) {
      alert('Access denied');
      
      return <Redirect to='/' />;
    }
    
    return (
      <p>Welcome { username }!</p>
    );
  }
}
