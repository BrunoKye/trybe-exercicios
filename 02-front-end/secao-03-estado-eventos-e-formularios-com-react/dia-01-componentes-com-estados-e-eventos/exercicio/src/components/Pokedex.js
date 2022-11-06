import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.pokemonNumber = this.pokemonNumber.bind(this);
    this.pokemonFilter = this.pokemonFilter.bind(this);
    this.pokemonType = this.pokemonType.bind(this);

    this.state = {
      count: 0,
      filter: '',
    };
  }

  pokemonNumber(listLenght) {
    this.setState((state) => ({
      count: (state.count + 1) % listLenght,
    }));
  }

  pokemonFilter(filter) {
    this.setState({ filter, count: 0 });
  }

  pokemonType() {
    const { filter } = this.state;
    const { pokemonList } = this.props;

    return pokemonList.filter((pokemon) => {
      if (filter === '') return true;
      return pokemon.type === filter;
    });
  }

  render() {
    const { count } = this.state;
    const newFilter = this.pokemonType();
    const newType = newFilter[count];

    return (
      <>
        <h1> Pokédex </h1>

        <div className="pokedex">
          <Pokemon pokemon={ newType } />
        </div>

        <div className="pokedex">
          <button
            className="btn-next"
            type="button"
            onClick={ () => this.pokemonNumber(newFilter.length) }
          >
            Próximo pokémon
          </button>

          <button
            className="btn-next"
            type="button"
            onClick={ () => this.pokemonFilter('Fire') }
          >
            Fire
          </button>

          <button
            className="btn-next"
            type="button"
            onClick={ () => this.pokemonFilter('Psychic') }
          >
            Psychic
          </button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
