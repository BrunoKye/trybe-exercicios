const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { travelModel } = require('../../../src/models');
const { newTravel, travels, travelsFromDB } = require('./mocks/travel.model.mock');

describe('Testes de unidade do model de viagens', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Realizando uma operação INSERT com o model travel', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    const result = await travelModel.insert(newTravel);
    expect(result).to.equal(42);
  });

  it('Recuperando uma travel a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[travelsFromDB[0]]]);
    const result = await travelModel.findById(1);
    expect(result).to.be.deep.equal(travels[0]);
  });

  it('Recuperando as travels a partir do seu travel_status_id', async function () {
    sinon.stub(connection, 'execute').resolves([travelsFromDB]);
    const result = await travelModel.findByTravelStatusId(1);
    expect(result).to.be.deep.equal(travels);
  });
});