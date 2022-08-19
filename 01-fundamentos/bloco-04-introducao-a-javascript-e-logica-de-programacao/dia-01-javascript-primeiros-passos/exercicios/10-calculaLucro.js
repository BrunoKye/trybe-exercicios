const custo = 100;
const venda = 350;
let custoTotal = custo + (custo * 0.20);
let lucro = (venda - custoTotal);

if (custo < 0 || venda < 0){
    console.log('ERRO: Valor negativo.');
}
else if(custoTotal > venda){
    console.log('ERRO: Custo total maior do que o valor de venda.');
}
else {
    console.log('A venda de mil unidades do produto resultou em um lucro de: R$', lucro * 1000 ,'reais');
}
