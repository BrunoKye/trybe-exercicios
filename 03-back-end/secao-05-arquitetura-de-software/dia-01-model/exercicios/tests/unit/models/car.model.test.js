const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { carModel } = require('../../../src/models');
const { cars, carId, newCar } = require('./mocks/car.model.mock');

describe('Testes de unidade do model de carros', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando um carro a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[cars[0]]]);
    const result = await carModel.findById(2);
    expect(result).to.be.deep.equal(cars[0]);
  });

  it('Cadastrando um novo carro', async function () {
    sinon.stub(connection, 'execute').resolves([{ carId }]);
    const result = await carModel.insert(newCar);
    expect(result).to.equal(1);
  });
});