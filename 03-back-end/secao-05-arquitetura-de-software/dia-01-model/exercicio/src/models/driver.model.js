const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM drivers',
  );
  return (result); 
};

const findById = async (driverId) => {
  const [[driver]] = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?',
    [driverId],
  );
  return (driver);
};

const insert = async (driver) => {
  const [{ driverId }] = await connection.execute(
    'INSERT INTO drivers (name) VALUE (?)',
    [driver.name],
  );

  return driverId;
};

module.exports = {
  findAll,
  findById,
  insert,
};