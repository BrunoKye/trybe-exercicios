const specialFruit = ['banana', 'uva', 'maçã'];
const additionalItens = ['morango', 'laranja'];
const param = [specialFruit, additionalItens];

const fruitSalad = (fruit, additional) => {
  return newArray = [...fruit, ...additional,];
};

console.log(fruitSalad(...param));
