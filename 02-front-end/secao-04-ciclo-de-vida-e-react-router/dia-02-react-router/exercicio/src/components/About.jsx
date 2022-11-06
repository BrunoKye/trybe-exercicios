import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>About Pokédex</h1>
        <div className="nav"><Link to="/">Home</Link></div>
        <p>
          Acesse para mais informações:
          {' '}
          <a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex">Bulbapedia</a>
        </p>
      </div>
    );
  }
}
