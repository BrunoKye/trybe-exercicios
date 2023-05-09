import React, { Component } from 'react'
import './styles/App.css';
import AboutYou from './components/AboutYou';
import Name from './components/Name';
import Email from './components/Email';
import FavoriteFood from './components/FavoriteFood';
import WeWon from './components/WeWon';

export default class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      favoriteFood: '',
      aboutYou: '',
      weWon: false,
      formError: true,
    };
  }

  handleError() {
    const { name, email, favoriteFood, aboutYou, weWon } = this.state;

    const errorCases = [
      !name.length,
      !email.length,
      !favoriteFood,
      !aboutYou.length,
      !weWon,
    ];

    const formOk = errorCases.every((error) => error !== true);

    this.setState({
      formError: !formOk,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.handleError);
  }

  handleSubmit() {
    alert('Boa :)');
  }

  render() {
    const { name, email, favoriteFood, aboutYou, weWon, formError } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="App">
        <h1>Formulário de Teste</h1>
        <form className="forms" onSubmit={ handleSubmit }>
          <Name value={ name } handleChange={ handleChange } />
          <Email value={ email } handleChange={ handleChange } />
          <FavoriteFood value={ favoriteFood } handleChange={ handleChange } />
          <AboutYou value={ aboutYou } handleChange={ handleChange } />
          <WeWon value={ weWon } handleChange={ handleChange } />
          <button type="submit" id="button-submit" disabled={ formError }>Enviar</button>
        </form>

        <div className="error-box">
          { 
            formError
              ? <span id="error">Preencha todos os campos.</span>
              : <span id="ok">Todos os campos foram preenchidos.</span>
          }
        </div>
      </div>
    )
  }
}
