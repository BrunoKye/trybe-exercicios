let calculateFactorial = n => {
    let result = 1;

    if (n > 1) {
        for (let i = 2; i <= n; i += 1) {
            result *= i;
        }
    } else {
        result = 'o número é inválido.';
    }
    return result;
}

console.log(`Esse é o fatorial: ${calculateFactorial(5)}`);
