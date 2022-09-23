const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

const hasName = (arr, name) => {
    return arr.some((element) => element === name);
};

const verifyAges = (arr, minimumAge) => {
    return arr.every((element) => element.age >= minimumAge);
};

console.log(hasName(names, 'Ana'));
console.log(verifyAges(people, 18));
