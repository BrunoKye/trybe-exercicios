function calculadora(a, b){
    let sum = a + b;
    let sub = a - b;
    let mult = a * b;
    let div = a / b;
    let mod = a % b;

    console.log(sum, sub, mult, div, mod);
}

function maiorDoisNumeros(a, b){
    if(a > b){
        console.log('O número', a, 'é maior.');
    }
    else if(b > a){
        console.log('O número', b, 'é maior.');
    }
    else {
        console.log('Os números são iguais.');
    }
}

function maiorTresNumeros(a, b, c){
    if(a > b && a > c){
        console.log('O número', a, 'é maior.');
    }
    else if(b > a && b > c){
        console.log('O número', b, 'é maior.');
    }
    else if(c > a && c > b){
        console.log('O número', c, 'é maior.')
    }
    else {
        console.log('Os números são iguais.');
    }
}

function avaliaNumero(a){
    if(a > 0){
        console.log('O valor', a, 'é positivo.');
    }
    else if(a < 0){
        console.log('O valor', a, 'é negativo.');
    }
    else {
        console.log('Zero :D');
    }    
}

function verificaTriangulo(a, b, c){
    let result = a + b + c;

    if(a, b, c <= 0){
        console.log('ERRO: Um dos ângulos digitados é negativo ou igual a zero.');
    }
    else if(result === 180){
        console.log(Boolean(result));
    }
    else{
        console.log(!Boolean(result));
    }    
}

calculadora(10, 5);
maiorDoisNumeros(720, 323);
maiorTresNumeros(7212, 155, 2032);
avaliaNumero(-7);
verificaTriangulo(30, 140, 10);
