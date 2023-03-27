const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { driverController } = require('../../../src/controllers');
const { driverService } = require('../../../src/services');
const { driverList, createdDriverWithCars,
  createdDriverWithoutCars, } = require('./mocks/driver-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Exercícios | Controller Driver', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('getDrivers', function () {
    beforeEach(function () {
      sinon
        .stub(driverService, 'getDrivers')
        .resolves({ type: null, message: driverList });
    });

    it('É chamado o status com o código 200', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.getDrivers(req, res);

      expect(res.status).to.have.been.calledOnceWith(200);
    });

    it('É chamado o json com a lista de motoristas', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.getDrivers(req, res);

      expect(res.json).to.have.been.calledWith(driverList);
    });
  });

  describe('createDriver', function () {
    describe('Cadastra uma nova pessoa motorista com carros', function () {
      beforeEach(function () {
        sinon
          .stub(driverService, 'createDriver')
          .resolves({ type: null, message: createdDriverWithCars });
      });

      it('é chamado o status com o código 201', async function () {
        const res = {};
        const req = {
          body: {
            name: 'Flavio',
            carIds: [1, 2],
          },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.createDriver(req, res);

        expect(res.status).to.have.been.calledOnceWith(201);
      });

      it('É chamado o json com o motorista cadastrado', async function () {
        const res = {};
        const req = {
          body: {
            name: 'Flavio',
            carIds: [1, 2],
          },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.createDriver(req, res);

        expect(res.json).to.have.been.calledWith(createdDriverWithCars);
      });
    });

    describe('Adicionando uma nova pessoa motorista sem carros', function () {
      beforeEach(function () {
        sinon
          .stub(driverService, 'createDriver')
          .resolves({ type: null, message: createdDriverWithoutCars });
      });

      it('É chamado o status com o código 201', async function () {
        const res = {};
        const req = {
          body: {
            name: 'Flavio',
          },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.createDriver(req, res);

        expect(res.status).to.have.been.calledOnceWith(201);
      });

      it('É chamado o json com o motorista cadastrado', async function () {
        const res = {};
        const req = {
          body: {
            name: 'Flavio',
          },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.createDriver(req, res);

        expect(res.json).to.have.been.calledWith(createdDriverWithoutCars);
      });
    });

    describe('Tentando cadastrar uma nova pessoa motorista com erros semânticos', function () {
      const invalidValueResponse = {
        type: 'INVALID_VALUE',
        message: '"name" length must be at least 3 characters long',
      };

      beforeEach(function () {
        sinon.stub(driverService, 'createDriver').resolves(invalidValueResponse);
      });

      it('É chamado o status com o código 422', async function () {
        const res = {};
        const req = {
          body: {
            name: 'Fl',
          },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.createDriver(req, res);
        expect(res.status).to.have.been.calledWith(422);
      });

      it('É chamado o json com a mensagem de erro', async function () {
        const res = {};
        const req = {
          body: {
            name: 'Fl',
          },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.createDriver(req, res);
        expect(res.json).to.have.been.calledWith({
          message: invalidValueResponse.message,
        });
      });
    });

    describe('Tentando cadastrar uma nova pessoa motorista com erros de id', function () {
      const invalidValueResponse = {
        type: 'CAR_NOT_FOUND',
        message: 'Some car is not found',
      };

      beforeEach(function () {
        sinon.stub(driverService, 'createDriver').resolves(invalidValueResponse);
      });

      it('É chamado o status com o código 404', async function () {
        const res = {};
        const req = {
          body: {
            name: 'Fl',
            carIds: [999],
          },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.createDriver(req, res);
        expect(res.status).to.have.been.calledWith(404);
      });
      it('É chamado o json com a mensagem de erro', async function () {
        const res = {};
        const req = {
          body: {
            name: 'Fl',
            carIds: [999],
          },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.createDriver(req, res);
        expect(res.json).to.have.been.calledWith({
          message: invalidValueResponse.message,
        });
      });
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});