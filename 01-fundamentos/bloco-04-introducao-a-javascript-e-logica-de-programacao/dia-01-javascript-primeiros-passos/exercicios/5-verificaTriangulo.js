let a = 30;
let b = 140;
let c = 10;
const result = a + b + c;

if(a, b, c <= 0){
    console.log('ERRO: Um dos ângulos digitados é negativo ou igual a zero.');
}
else if(result === 180){
    console.log(Boolean(result));
}
else{
    console.log(!Boolean(result));
}
