const { travelModel, driverModel,
  driverCarModel, carModel } = require('../models');
const { validateNewDriver } = require('./validations/inputValues');

const WAITING_DRIVER = 1;

const getWaitingDriverTravels = async () => {
  const travels = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  return { type: null, message: travels };
};

const getDrivers = async () => {
  const drivers = await driverModel.findAll();
  return { type: null, message: drivers };
};

const createDriver = async (name, carIds) => {
  const error = await validateNewDriver(name, carIds);
  
  if (error.type) return error;

  const driverId = await driverModel.insert({ name });
  const newDriver = await driverModel.findById(driverId);

  if (carIds && carIds.length > 0) {
    await Promise.all(carIds.map(
      async (carId) => driverCarModel.insert({ driverId: newDriver.id, carId }),
    ));

    newDriver.cars = await Promise.all(
      carIds.map(async (carId) => carModel.findById(carId)),
    );
  } else {
    newDriver.cars = [];
  }

  return { type: null, message: newDriver };
};

module.exports = {
  getWaitingDriverTravels,
  getDrivers,
  createDriver,
};