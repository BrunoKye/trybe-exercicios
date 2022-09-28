// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]);

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [firstElement, secondElement] = saudacoes;

// secondElement(firstElement);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[comida, animal, bebida] = [bebida, comida, bebida];

// console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
