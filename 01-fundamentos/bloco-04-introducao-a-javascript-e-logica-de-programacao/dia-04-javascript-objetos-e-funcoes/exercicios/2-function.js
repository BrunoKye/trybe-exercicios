//  1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome(str){
    return str == str.split('').reverse().join('');
}

// console.log(verificaPalindrome('teste'));


//  2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let testHigher = [2, 3, 6, 7, 10, 1];

function retornaMaiorValor(arr){
    let higherValue = Math.max(...arr);
    let index = arr.indexOf(higherValue);
    
    return index;
}

// console.log(retornaMaiorValor(testHigher));


//  3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let testLower = [2, 4, 6, 7, 10, 0, -3];

function retornaMenorValor(arr){
    let lowerValue = Math.min(...arr);
    let index = arr.indexOf(lowerValue);
    
    return index;
}

// console.log(retornaMenorValor(testLower));


//  4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let testWord = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retornaMaiorString(arr){
    return arr.slice().sort(function (a, b){
        return b.length - a.length
    })
    
    [0];
}

// console.log(retornaMaiorString(testWord));


//  :rocket: 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let testRepeat = [2, 3, 2, 5, 8, 2, 3];

function retornaMaiorRepeticao(arr){
    return arr.slice().sort(
        (a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length
    )
    
    .pop();
}

// console.log(retornaMaiorRepeticao(testRepeat));


// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
let testNumber = 5;

function retornaSoma(number){
    let sum = 0;

    for(let i = 1; i <= number; i += 1){
        sum = sum + i;
    }

    return sum;
}

if(testNumber >= 1){
    // console.log('A soma dos números de 1 até ' + testNumber + ' é: ' + retornaSoma(testNumber));
} else{
    // console.log('ERRO: Valor igual ou menor que zero.');
}


//  7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
 function verificaStrings(a, b){
    return a.endsWith(b);
 }

 // console.log(verificaStrings('joaofernando', 'fernan'));
