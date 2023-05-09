import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/pokemon/:id"
            render={ (props) => (
              <PokemonDetails
                { ...props }
                pokemonList={ pokemonList }
              />
            ) }
          />

          <Route
            exact
            path="/"
            render={ () => (<Pokedex
              pokemonList={ pokemonList }
            />) }
          />

          <Route exact path="/about" component={ About } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
