import readline from 'readline-sync';

const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = massUnits.indexOf(fromUnit);
  const toIndex = massUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(massUnits, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(massUnits, 'Escolha um número para a conversão:');

  const toUnitChoice = massUnits[toUnitChoiceIndex];
  const fromUnitChoice = massUnits[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = convertMass(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();