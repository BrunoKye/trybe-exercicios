const valorCusto = 100;
const valorVenda = 350;
let custoTotal = valorCusto + (valorCusto * 0.20);
let valorLucro = (valorVenda - custoTotal);

if (valorCusto < 0 || valorVenda < 0){
    console.log('ERRO: Valor negativo.');
}
else if(custoTotal > valorVenda){
    console.log('ERRO: Custo total maior do que o valor de venda.');
}
else {
    console.log('A venda de mil unidades do produto resultou em um lucro de: R$', valorLucro * 1000 ,'reais');
}
