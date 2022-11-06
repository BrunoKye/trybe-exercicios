import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';
import '../styles/details.css';

export default class PokemonDetails extends Component {
  render() {
    const {
      pokemonList,
      match: {
        params: { id },
      },
    } = this.props;

    const pokemonId = pokemonList.find((pokemon) => pokemon.id === +id);
    const { name, summary } = pokemonId;

    return (
      <div className="pokemon-details">
        <h1>{`${name} details`}</h1>
        <p><Link to="/">Home</Link></p>
        <div className="pokedex">
          <Pokemon
            pokemon={ pokemonId }
            hideLink
          />
        </div>

        <h2>Summary</h2>
        <p>{ summary }</p>

        <h2>Location</h2>
        <div className="pokemon-location">
          { pokemonId.foundAt.map((spawn) => (
            <div className="pokemon-map" key={ spawn.location }>
              <p>{ spawn.location }</p>
              <img src={ spawn.map } alt={ `Location of ${name}` } />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;
