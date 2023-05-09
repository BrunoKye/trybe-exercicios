const camelize = require('camelize');
const connection = require('./connection');

const findById = async (carId) => {
  const [[car]] = await connection.execute(
    'SELECT * FROM cars WHERE id = ?',
    [carId],
  );
  return camelize(car);
};

const insert = async (car) => {
  const columns = Object.keys(car).join(', ');

  const placeholders = Object.keys(car)
    .map((_key) => '?')
    .join(', ');

  const [{ carId }] = await connection.execute(
    `INSERT INTO cars (${columns}) VALUE (${placeholders})`,
    [...Object.values(car)],
  );

  return carId;
};

module.exports = {
  findById,
  insert,
};