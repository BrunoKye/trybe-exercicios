import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsContext from './context/FilmsContext';

export default function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')
      .then((result) => result.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  function handleFavorite(film) {
    const verifyFavorite = favorites.find((favorite) => favorite.id === film.id);
    const newFavorites = favorites.filter((favorite) => favorite.id !== film.id);

    const result = (
      verifyFavorite ? setFavorites(newFavorites) : setFavorites([...favorites, film])
    );

    return result;
  }

  return (
    <FilmsContext.Provider value={ { films, favorites, handleFavorite } }>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </FilmsContext.Provider>
  );
}
