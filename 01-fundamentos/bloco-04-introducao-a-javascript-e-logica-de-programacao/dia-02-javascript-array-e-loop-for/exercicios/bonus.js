let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let crescent = numbers.sort((a, b) => a - b);
// let decrescent = numbers.sort((a, b) => b - a);
let newNumbers = [];

// console.log(crescent);
// console.log(decrescent);
for(let i = 0; i < numbers.length; i += 1){
    let nowNumber = numbers[i];
    if((numbers[i + 1]) === undefined){
        newNumbers.push(nowNumber * 2);
    }
    else{
        newNumbers.push(nowNumber * numbers[i + 1]);
    }
}

console.log(newNumbers);
