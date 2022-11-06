import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';
import '../styles/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon, hideLink } = this.props;
    const { name, type, averageWeight, image, id } = pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p>
            { !hideLink && <Link to={ `/pokemon/${id}` }>Details</Link> }
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

Pokemon.defaultProps = {
  hideLink: false,
};

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
  hideLink: PropTypes.bool,
};

export default Pokemon;
