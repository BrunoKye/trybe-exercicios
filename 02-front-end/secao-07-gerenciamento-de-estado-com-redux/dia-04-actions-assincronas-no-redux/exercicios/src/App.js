import React, { Component } from 'react'
import { connect } from 'react-redux';
import Character from './components/Character';
import { fetchCharacter } from './redux/actions';

class App extends Component {
  state = {
    character: '',
  };

  render() {
    const { character } = this.state;
    const { dispatch } = this.props;

    return (
      <div className="container">
        <h1>Game of Thunks</h1>

        <div className="input-container">
          <label htmlFor="input-name">
            Character Name
          </label>

          <input
            id="input-name"
            type="text"
            onChange={({ target }) => this.setState({ character: target.value })}
            value={character}
          />

          <button
            id="button-search"
            type="button"
            onClick={() => dispatch(fetchCharacter(character))}
          >
            Search
          </button>
        </div>

        <Character />
      </div>
    )
  }
}

export default connect()(App);
