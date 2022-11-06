import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countryStates from '../countryStates';

export default class AdressData extends Component {
  render() {
    const { adress, city, state, house, apartament, handleChange } = this.props;

    return (
      <fieldset className="form-box">
        <legend>Dados de Endereço</legend>
        <label className="label-input" htmlFor="adress">
          <span className="label-input">Endereço</span>
          <input
            type="text"
            id="adress"
            name="adress"
            maxLength="200"
            value={ adress }
            onChange={ handleChange }
          />
        </label>

        <label className="label-input" htmlFor="city">
          <span className="label-input">Cidade</span>
          <input
            type="text"
            id="city"
            name="city"
            maxLength="28"
            value={ city }
            onChange={ handleChange }
          />
        </label>

        <label className="label-input" htmlFor="state">
          <span className="label-input">Estado</span>
          <select
            id="state"
            name="state"
            value={ state }
            onChange={ handleChange }
          >
            {countryStates.map((states) => (
              <option key={ states.toLowerCase() }>
                { states }
              </option>
            ))}
          </select>
        </label>

        <div>
          <label className="label-input" htmlFor="house">
            <span className="label-input">Casa</span>
            <input
              type="radio"
              id="house"
              name="radio-buttons"
              value="house"
              checked={ house }
              onChange={ handleChange }
            />
          </label>

          <label className="label-input" htmlFor="apartament">
            <span className="label-input">Apartamento</span>
            <input
              type="radio"
              id="apartament"
              name="radio-buttons"
              value="apartament"
              checked={ apartament }
              onChange={ handleChange }
            />
          </label>
        </div>
      </fieldset>
    );
  }
}

AdressData.propTypes = {
  adress: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  house: PropTypes.bool,
  apartament: PropTypes.bool,
  handleChange: PropTypes.func,
}.isRequired;
