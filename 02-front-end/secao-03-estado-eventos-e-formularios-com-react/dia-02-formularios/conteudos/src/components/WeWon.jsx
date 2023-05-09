import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WeWon extends Component {
  render() {
    const { weWon, handleChange } = this.props;

    return (
      <label id="iconic-question">
        <span>Ganhamo?</span>
        <input
          type="checkbox"
          name="weWon"
          value={ weWon }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

WeWon.propTypes = {
  weWon: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
