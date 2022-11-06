import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavoriteFood extends Component {
  render() {
    const { favoriteFood, handleChange } = this.props;

    return (
      <label className="label">
        <span className="label-title">Qual é a sua comida favorita?</span>
        <select
          name="favoriteFood"
          defaultValue="Escolha uma Comida"
          value={ favoriteFood }
          onChange={ handleChange }
        >
          <option disabled>Escolha uma Comida</option>
          <option value="pizza">Pizza</option>
          <option value="sorvete">Sorvete</option>
          <option value="hamburguer">Hambúrguer</option>
          <option value="coxinha">Coxinha</option>
        </select>
      </label>
    );
  }
}

FavoriteFood.propTypes = {
  favoriteFood: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
