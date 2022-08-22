let array = ['java', 'javascript', 'python', 'html', 'css'];

console.log(array.reduce((a, b) => a.length <= b.length ? a : b));
console.log(array.reduce((a, b) => a.length >= b.length ? a : b));