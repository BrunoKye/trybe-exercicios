import { useContext } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from '../context/FilmsContext';
import '../styles/pages.css';
import full from '../icons/full-heart.svg';
import empty from '../icons/empty-heart.svg';

export default function FilmCard({ film, isFavorite }) {
  const { handleFavorite } = useContext(FilmsContext);
  const { id, image, title } = film;

  return (
    <figure className="figure" key={ id }>
      <img className="image" src={ image } alt={ title } />

      {/* <figcaption>
        <h2>{ title }</h2>
        <p>{ description }</p>
      </figcaption> */}

      <button
        className="button"
        type="button"
        onClick={ () => handleFavorite(film) }
      >
        <img
          className="icon"
          src={
            isFavorite ? full : empty
          }
          alt={
            isFavorite ? 'Favorite' : 'Not Favorite'
          }
        />
      </button>
    </figure>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
}.isRequired;
