const { run } = require("jest");

const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grama',
      ability: 'Raio Solar',
    },
    {
      name: 'Charmander',
      type: 'Fogo',
      ability: 'Lança Chamas',
    },
    {
      name: 'Squirtle',
      type: 'Água',
      ability: 'Jato de Água',
    },
  ];
  
  function getPokemonDetails(selectedPokemon, callback) {
    const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);
  
    setTimeout(() => {
      if (foundPokemon === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
  
      const { name, type, ability } = foundPokemon;
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  const handlePokemonSearch = (error, message) => {
    if (error === null) console.log(message);
    else console.log(error);
  };
  
  getPokemonDetails('Charmander', handlePokemonSearch);

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (runTest) => {
    const expected = new Error('Não temos esse pokémon para você :(');

    getPokemonDetails('Riolu', (error, message) => {
      try {
        expect(error).toEqual(expected);
        runTest();
      } catch (error) {
        runTest(error);
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (runTest) => {
    const expected = `Olá, seu pokémon é o Squirtle, o tipo dele é Água e a habilidade principal dele é Jato de Água`;

    getPokemonDetails('Squirtle', (error, message) => {
      try {
        expect(message).toBe(expected);
        runTest();
      } catch (error) {
        runTest(error);
      }
    });
  });
});