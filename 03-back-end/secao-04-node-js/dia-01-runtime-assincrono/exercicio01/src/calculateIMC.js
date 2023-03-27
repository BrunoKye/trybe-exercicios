const readline = require('readline-sync');

const calculateIMC = (weight, height) => {
  const promise = new Promise((resolve, reject) => {
    if (weight === 0 || height === 0) {
      reject(new Error("altura ou peso digitados de forma inválida."));
    }

    const result = weight / Math.pow(height, 2);

    resolve(result.toFixed(2));
  });

  return promise;
}

const verifyIMC = async () => {
  const weight = readline.questionFloat('Qual é o seu peso em kg? ');
  const height = readline.questionFloat('Qual é a sua altura em metros? ');
  const imc = await calculateIMC(weight, height);

  if (imc < 18.5) {
    return console.log(`${imc} - Abaixo do peso (magreza).`);
  }

  if (imc >= 18.5 && imc < 25) {
    return console.log(`${imc} - Peso normal.`);
  }

  if (imc >= 25 && imc < 30) {
    return console.log(`${imc} - Acima do peso (sobrepeso).`);
  }

  if (imc >= 30 && imc < 35) {
    return console.log(`${imc} - Obesidade grau I.`);
  }

  if (imc >= 35 && imc < 40) {
    return console.log(`${imc} - Obesidade grau II.`);
  }

  console.log(`${imc} - Obesidade grau III e IV.`);
};

verifyIMC();
