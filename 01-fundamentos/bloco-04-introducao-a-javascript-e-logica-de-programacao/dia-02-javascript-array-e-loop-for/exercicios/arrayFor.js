let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let avgValue = 0;
let highestNumber = numbers[0];


/* 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log(); 
console.log(numbers); */

/* 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 
for(let i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
}

console.log(sum); */

/* 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
for(let i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
}

avgValue = sum/numbers.length;
console.log(avgValue); */

/* 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
for(let i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
}

avgValue = sum/numbers.length;

if(avgValue > 20){
    console.log('Valor maior que 20.');
}
else {
    console.log('Valor menor ou igual a 20.'); 
} */

/* 5. :rocket: Utilizando for, descubra qual o maior valor contido no array e imprima-o; */
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] > highestNumber){
        highestNumber = numbers[i];
    }
}

console.log(highestNumber);

/* 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
/* 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o; */
/* 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */
/* 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */
