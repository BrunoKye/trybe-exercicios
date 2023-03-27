const camelize = require('camelize');
const connection = require('./connection');

const insert = async (driverCar) => {
  const { driverId, carId } = driverCar;

  const [{ driverCarId }] = await connection.execute(
    'INSERT INTO drivers_cars (driver_id, car_id) VALUE (?, ?)',
    [driverId, carId],
  );
  return camelize(driverCarId);
};

module.exports = {
  insert,
};