const { travelModel, driverModel,
  driverCarModel, carModel } = require('../models');
const { validateNewDriver, validateInputValues, 
  validateAlreadyDriver } = require('./validations/inputValues');

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

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

const travelAssign = async ({ travelId, driverId }) => {
  let error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  error = await validateAlreadyDriver(travelId);
  if (error.type) return error;

  await travelModel.updateById(travelId, { driverId, travelStatusId: DRIVER_ON_THE_WAY });
  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

const startTravel = async ({ travelId, driverId }) => {
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_IN_PROGRESS });

  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

const endTravel = async ({ travelId, driverId }) => {
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_FINISHED });

  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

module.exports = {
  getWaitingDriverTravels,
  getDrivers,
  createDriver,
  travelAssign,
  startTravel,
  endTravel,
};