const { expect } = require('chai');
const sinon = require('sinon');

const { travelModel, driverModel, driverCarModel, carModel } = require('../../../src/models');
const { driverService } = require('../../../src/services');
const { carList } = require('./mocks/car.service.mock');
const { listTravelsWithoutDriver, driverList, createdDriverWithoutCars,
  createdDriverWithCars, createdDriver } = require('./mocks/driver.service.mock');

const validDriverName = 'Gus';
const invalidValue = '1';

describe('Testes de service de motoristas', function () {
  describe('findAll e findByTravelStatusId', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('Retorna uma array com os elementos esperados', async function () {
      sinon.stub(travelModel, 'findByTravelStatusId').resolves(listTravelsWithoutDriver);
      const response = await driverService.getWaitingDriverTravels();

      expect(response.type).to.equal(null);
      expect(response.message).to.be.deep.equal(listTravelsWithoutDriver);
    });

    it('A lista de motoristas é um array', async function () {
      sinon.stub(driverModel, 'findAll').resolves(driverList);
      const travel = await driverService.getDrivers();
      expect(travel.message instanceof Array).to.equal(true);
    });

    it('Retorna a lista de motoristas com sucesso', async function () {
      sinon.stub(driverModel, 'findAll').resolves(driverList);
      const travel = await driverService.getDrivers();
      expect(travel.message).to.deep.equal(driverList);
    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros semânticos', function () {
    it('retorna um erro ao receber um nome inválido', async function () {
      const response = await driverService.createDriver(invalidValue);

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"name" length must be at least 3 characters long',
      );
    });

    it('retorna um erro ao receber uma lista de carros inválida', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        invalidValue,
      );

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal('"carIds" must be an array');
    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros de id', function () {
    beforeEach(function () {
      sinon.stub(carModel, 'findById').resolves();
    });

    afterEach(function () {
      sinon.restore();
    });

    it('retorna o erro "CAR_NOT_FOUND"', async function () {
      const response = await driverService.createDriver(validDriverName, [999]);

      expect(response.type).to.equal('CAR_NOT_FOUND');
    });

    it('retorna a mensagem "Some car is not found"', async function () {
      const response = await driverService.createDriver(validDriverName, [999]);

      expect(response.message).to.equal('Some car is not found');
    });
  });

  describe('Cadastrando uma nova pessoa motorista com sucesso sem carros', function () {
    beforeEach(function () {
      sinon.stub(driverModel, 'insert').resolves(1);
      sinon.stub(driverModel, 'findById').resolves(createdDriver);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('retorna a pessoa motorista cadastrada', async function () {
      const response = await driverService.createDriver(validDriverName);

      expect(response.message).to.deep.equal(createdDriverWithoutCars);
    });

    it('não retorna erro', async function () {
      const response = await driverService.createDriver(validDriverName);

      expect(response.type).to.equal(null);
    });
  });

  describe('Cadastrando uma nova pessoa motorista com sucesso com carros', function () {
    beforeEach(function () {
      sinon.stub(driverModel, 'insert').resolves(1);
      sinon.stub(driverModel, 'findById').resolves(createdDriver);
      sinon.stub(driverCarModel, 'insert').resolves();
      sinon.stub(carModel, 'findById')
        .onCall(0)
        .resolves(carList[0])
        .onCall(1)
        .resolves(carList[1])
        .onCall(2)
        .resolves(carList[0])
        .onCall(3)
        .resolves(carList[1]);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('retorna os carros vinculados à pessoa motorista', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        [1, 2],
      );

      expect(response.type).to.equal(null);
      expect(response.message).to.deep.equal(createdDriverWithCars);
    });

    it('não retorna erro', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        [1, 2],
      );

      expect(response.type).to.equal(null);
    });
  });
});