import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PersonInfo extends Component {
  render() {
    const { person: { name, email, age, image } } = this.props;
    return (
      <div>
        <p>Nome: { name }</p>
        <p>Email: { email }</p>
        <p>Idade: { age }</p>
        <img src={ image } alt={ name } />
      </div>
    )
  }
}

PersonInfo.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    imagem: PropTypes.string,
  }).isRequired,
};
