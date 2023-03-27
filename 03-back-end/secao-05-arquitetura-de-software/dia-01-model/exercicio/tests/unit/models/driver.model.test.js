const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { driverModel } = require('../../../src/models');
const { drivers, driverId, newDriver } = require('./mocks/driver.model.mock');

describe('Testes de unidade do model de motoristas', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se a lista de motoristas é do tipo "array" ', async function () {
    const response = await driverModel.findAll();
    expect(response).to.be.a('array');
  });

  it('Recuperando a lista de motoristas', async function () {
    sinon.stub(connection, 'execute').resolves([drivers]);
    const result = await driverModel.findAll();
    expect(result).to.be.deep.equal(drivers);
  });

  it('Recuperando um motorista a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[drivers[0]]]);
    const result = await driverModel.findById(2);
    expect(result).to.be.deep.equal(drivers[0]);
  });

  it('Cadastrando um novo motorista', async function () {
    sinon.stub(connection, 'execute').resolves([{ driverId }]);
    const result = await driverModel.insert(newDriver);
    expect(result).to.equal(3);
  });
});