import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    imageUrl: '',
  };

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('image', imageUrl);

    const getUrl = localStorage.getItem('image');
    const race = getUrl.split('/');

    alert(race[4]);
  }

  fetchDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const request = await fetch(url);
    const data = await request.json();

    this.setState({
      isLoading: false,
      imageUrl: data.message,
    });
  };

  render() {
    const { isLoading, imageUrl } = this.state;

    return (
      <div>
        <h1>Doguinhos</h1>

        <p>
          { isLoading
            ? <span>Loading...</span>
            : <img src={ imageUrl } alt="Doguinho aleatório" /> }
        </p>

        <button
          type="button"
          onClick={ this.fetchDog }
        >
          Novo doguinho!
        </button>
      </div>
    );
  }
}

export default App;
