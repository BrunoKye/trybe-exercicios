import React, { Component } from 'react';
import { connect } from 'react-redux';

class Character extends Component {
  render() {
    const { loading, character, error } = this.props;
    const { name, gender, culture, born } = character;

    if (loading) return <p>Loading...</p>
    if (character) {
      return (
        <div>
          <p>Name: {name} </p>
          <p>Gender: {gender} </p>
          <p>Culture: {culture} </p>
          <p>Born: {born} </p>
        </div>
      )
    }
    if (error) return <p>{ error }</p>
  }
}

const mapStateToProps = (state) => ({
  loading: state.isLoading,
  character: state.character,
  error: state.error,
});

export default connect(mapStateToProps)(Character)
