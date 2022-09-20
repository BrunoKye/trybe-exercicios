const { encode, decode } = require('./4-code.js');

describe('Exercício 4 - Para as funções encode e decode, crie os seguintes testes em Jest:', () => {
    test('Teste se encode e decode são funções', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    });

    test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toBe('12345');
    });

    test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('12345')).toBe('aeiou');
    });

    test('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('teste')).toBe('t2st2');
        expect(decode('t2st2')).toBe('teste');
    });

    test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('teste').length).toBe(5);
        expect(decode('t3st3').length).toBe(5);
    });
});