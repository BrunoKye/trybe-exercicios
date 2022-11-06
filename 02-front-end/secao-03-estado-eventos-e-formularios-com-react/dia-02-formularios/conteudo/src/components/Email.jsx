import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Email extends Component {
  render() {
    const { email, handleChange } = this.props;

    return (
      <label className="label">
        <span className="label-title">Email</span>
        <input
          type="text"
          name="email"
          value={ email }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Email.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
