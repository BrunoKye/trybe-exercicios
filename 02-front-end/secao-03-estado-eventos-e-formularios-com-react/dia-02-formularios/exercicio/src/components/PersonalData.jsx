import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PersonalData extends Component {
  render() {
    const { name, email, cpf, handleChange } = this.props;

    return (
      <fieldset className="form-box">
        <legend>Dados Pessoais</legend>
        <label className="label-input" htmlFor="name">
          <span className="label-input">Nome</span>
          <input
            type="text"
            id="name"
            name="name"
            maxLength="40"
            value={ name }
            onChange={ handleChange }
          />
        </label>

        <label className="label-input" htmlFor="email">
          <span className="label-input">Email</span>
          <input
            type="email"
            id="email"
            name="email"
            maxLength="50"
            value={ email }
            onChange={ handleChange }
          />
        </label>

        <label className="label-input" htmlFor="cpf">
          <span className="label-input">CPF</span>
          <input
            type="text"
            id="cpf"
            name="cpf"
            maxLength="11"
            value={ cpf }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

PersonalData.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
