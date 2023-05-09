import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Name extends Component {
  render() {
    const { name, handleChange } = this.props;

    return (
      <label className="label">
        <span className="label-title">Nome</span>
        <input
          type="text"
          name="name"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
