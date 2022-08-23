let numbers = [];
let highestNumber = 50;

for(let i = 2; i < highestNumber; i += 1){
    if(i % 2 !== 0 && i % 3 !== 0){
        numbers.push(i);
    }
} 

let highestPrime = numbers[0];

for(let j = 0; j < numbers.length; j += 1){
    if(numbers[j] > highestPrime){
        highestPrime = numbers[j];
    }
}

console.log('O maior número primo entre 2 e', highestNumber, 'é:', highestPrime);
