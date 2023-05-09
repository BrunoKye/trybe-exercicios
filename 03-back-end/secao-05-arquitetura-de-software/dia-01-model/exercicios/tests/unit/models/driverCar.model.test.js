const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { driverCarModel } = require('../../../src/models');
const { newDriverCar, driverCarId } = require('./mocks/driverCar.model.mock');

describe('Testes de unidade do model de relação entre motoristas e carros', function () {
  it('Cadastrando uma nova relação entre motoristas e carros', async function () {
    sinon.stub(connection, 'execute').resolves([{ driverCarId }]);
    const result = await driverCarModel.insert(newDriverCar);
    expect(result).to.equal(1);
    sinon.restore();
  });
});