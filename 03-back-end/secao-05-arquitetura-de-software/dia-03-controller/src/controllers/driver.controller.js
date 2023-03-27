const { driverService } = require('../services');
const errorMap = require('../utils/errorMap');

const getDrivers = async (_req, res) => {
  const { message } = await driverService.getDrivers();

  res.status(200).json(message);
};

const openTravel = async (_req, res) => {
  const { type, message } = await driverService.getWaitingDriverTravels();

  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const createDriver = async (req, res) => {
  const { name, carIds } = req.body;
  const { type, message } = await driverService.createDriver(name, carIds);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  getDrivers,
  openTravel,
  createDriver,
};