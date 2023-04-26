"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convertLength(value, fromUnit, toUnit) {
    const fromIndex = lengthUnits.indexOf(fromUnit);
    const toIndex = lengthUnits.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(lengthUnits, 'Escolha um número para a unidade base:');
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(lengthUnits, 'Escolha um número para a conversão:');
    const toUnitChoice = lengthUnits[toUnitChoiceIndex];
    const fromUnitChoice = lengthUnits[fromUnitChoiceIndex];
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convertLength(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
