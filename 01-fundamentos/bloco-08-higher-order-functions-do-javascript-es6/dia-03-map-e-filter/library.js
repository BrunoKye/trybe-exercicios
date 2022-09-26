const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

function formatedBookNames() {
    return books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}

function nameAndAge() {
    const newArray = books.map((element) => (
        {'age': element.releaseYear - element.author.birthYear, 'author': element.author.name}
    ));
    
    return newArray.sort((a, b) => a.age - b.age);
}

function fantasyOrScienceFiction() {
    return books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
}

function oldBooksOrdered(year) {
    return books.filter((element) => year - element.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

function fantasyOrScienceFictionAuthors() {
    return books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia').map((element) => element.author.name).sort();
}

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
function oldBooks(year) {
    return books.filter((element) => year - element.releaseYear > 60).map((element) => element.name);
}

// console.log(formatedBookNames());
// console.log(nameAndAge());
// console.log(fantasyOrScienceFiction());
// console.log(oldBooksOrdered(2022));
// console.log(fantasyOrScienceFictionAuthors());
console.log(oldBooks(2022));
