let salarioBruto = 3423.50;
let salarioBase;
let salarioLiquido;
let salarioRedondo;

if(salarioBruto <= 0){
    console.log('ERRO: Valor inválido, menor ou igual a zero.');
    process.exit();
}
else if(salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto * 0.08);
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto * 0.09);
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase =  salarioBruto - (salarioBruto * 0.11);
}
else if(salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88;
}
else{
    console.log('ERRO: Digite números para serem calculados.');
    process.exit();
}

if(salarioBase <= 1903.98){
    salarioLiquido = salarioBase;
    salarioRedondo = salarioLiquido.toFixed(2);
    console.log('Resultado: R$', salarioLiquido);
}
else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - (salarioBase * 0.075 - 142.80);
    salarioRedondo = salarioLiquido.toFixed(2);
    console.log('Resultado: R$', salarioRedondo);
}
else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - (salarioBase * 0.15 - 354.80);
    salarioRedondo = salarioLiquido.toFixed(2);
    console.log('Resultado: R$', salarioRedondo);
}
else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - (salarioBase * 0.225 - 636.13);
    salarioRedondo = salarioLiquido.toFixed(2);
    console.log('Resultado: R$', salarioRedondo);
}
else {
    salarioLiquido = salarioBase - (salarioBase * 0.275 - 869.36);
    salarioRedondo = salarioLiquido.toFixed(2);
    console.log('Resultado: R$', salarioRedondo);
}
