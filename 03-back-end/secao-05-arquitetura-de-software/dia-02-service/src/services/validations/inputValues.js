const { carModel } = require('../../models');
const { idSchema, addPassengerSchema,
  addRequestTravelSchema, addCarSchema,
  addDriverSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };

  return { type: null, message: '' };
};

const validateNewPassenger = (name, email, phone) => {
  const { error } = addPassengerSchema
    .validate({ name, email, phone });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateRequestTravel = (passengerId, startingAddress, endingAddress, waypoints) => {
  const { error } = addRequestTravelSchema
    .validate({ passengerId, startingAddress, endingAddress, waypoints });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateNewCar = (model, color, licensePlate) => {
  const { error } = addCarSchema
    .validate({ model, color, licensePlate });

  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

const validateNewDriver = async (name, carIds) => {
  const { error } = addDriverSchema
    .validate({ name, carIds });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  if (carIds) {
    const cars = await Promise.all(
      carIds.map(async (carId) => carModel.findById(carId)),
    );

    const someCarIsMissing = cars.some((car) => car === undefined);
    if (someCarIsMissing) return { type: 'CAR_NOT_FOUND', message: 'Some car is not found' };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateNewPassenger,
  validateRequestTravel,
  validateNewCar,
  validateNewDriver,
};