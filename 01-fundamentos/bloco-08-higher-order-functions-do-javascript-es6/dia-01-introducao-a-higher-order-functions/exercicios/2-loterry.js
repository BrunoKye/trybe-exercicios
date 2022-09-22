const verifyResult = (bet, random) => bet === random; 
const generateNumber = (bet, callback) => {
    const random = Math.floor(Math.random() * 5) + 1;

    return callback(bet, random) ? 'Parabéns você ganhou!!' : 'Tente novamente.';
}

console.log(generateNumber(4, verifyResult));
