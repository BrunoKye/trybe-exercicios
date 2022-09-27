const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
function flatten() {
    // return arrays.reduce((newArray, elements) => newArray.push(elements));
    return arrays.reduce((newArray, elements) => newArray.concat(elements));
}

console.log(flatten());
