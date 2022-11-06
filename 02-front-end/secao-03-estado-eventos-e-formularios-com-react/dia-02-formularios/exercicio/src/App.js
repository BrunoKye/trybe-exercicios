import React from 'react';
import PersonalData from './components/PersonalData';
import './App.css';
import AdressData from './components/AdressData';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      house: true,
      apartament: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = name === 'name' ? target.value.toUpperCase() : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, cpf, adress, city, state, house, apartament } = this.state;
    const { handleChange } = this;

    return (
      <div>
        <h1>Formulário</h1>
        <form>
          <PersonalData
            name={ name }
            email={ email }
            cpf={ cpf }
            handleChange={ handleChange }
          />
          <AdressData
            adress={ adress }
            city={ city }
            state={ state }
            house={ house }
            apartament={ apartament }
            handleChange={ handleChange }
          />
        </form>
      </div>
    );
  }
}

export default App;
