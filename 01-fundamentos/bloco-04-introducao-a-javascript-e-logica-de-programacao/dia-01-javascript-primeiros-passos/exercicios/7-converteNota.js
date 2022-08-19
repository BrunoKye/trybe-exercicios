let nota = 'opa';

if(nota >= 90){
    console.log('Sua nota foi A.');
}
else if(nota >= 80){
    console.log('Sua nota foi B.');
}
else if(nota >= 70){
    console.log('Sua nota foi C.');
}
else if(nota >= 60){
    console.log('Sua nota foi D.');
}
else if(nota >= 50){
    console.log('Sua nota foi E.');
}
else if(nota < 50 && nota > 0){
    console.log('Sua nota foi F.');
}
else if(nota <= 0){
    console.log('ERRO: A nota digitada é inválida.');
}
else {
    console.log('ERRO: Digite um número para verificar sua nota.');
}