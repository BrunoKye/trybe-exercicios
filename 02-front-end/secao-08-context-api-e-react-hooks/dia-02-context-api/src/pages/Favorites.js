import { useContext } from 'react';
import FilmCard from '../components/FilmCard';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';
import '../styles/pages.css';

export default function Favorites() {
  const { favorites } = useContext(FilmsContext);
  return (
    <>
      <Header />
      <main>
        <h1 className="title">Favorites</h1>

        <section className="card-container">
          {favorites.map((film) => (
            <FilmCard
              key={ film.id }
              film={ film }
              isFavorite={ favorites.some((favorite) => favorite.id === film.id) }
            />
          ))}
        </section>
      </main>
    </>
  );
}
