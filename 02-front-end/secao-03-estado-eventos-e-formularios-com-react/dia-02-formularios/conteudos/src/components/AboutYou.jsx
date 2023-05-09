import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AboutYou extends Component {
  render() {
    const { aboutYou, handleChange } = this.props;

    return (
      <fieldset className="">
        <legend>Conte-me mais sobre você</legend>
        <label id="field-box">
          Confia
          <textarea
            name="aboutYou"
            className="text-box"
            value={ aboutYou }
            onChange={ handleChange }
          />

          <input type="file" id="file-select" />
        </label>
      </fieldset>
    );
  }
}

AboutYou.propTypes = {
  aboutYou: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
