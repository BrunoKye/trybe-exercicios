let array = ['java', 'javascript', 'python', 'html', 'css'];

console.log('A menor palavra do array é:', array.reduce((a, b) => a.length <= b.length ? a : b));
console.log('A maior palavra do array é:', array.reduce((a, b) => a.length >= b.length ? a : b));
