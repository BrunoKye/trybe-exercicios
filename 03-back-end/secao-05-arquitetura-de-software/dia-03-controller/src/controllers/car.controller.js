const { carService } = require('../services');
const errorMap = require('../utils/errorMap');

const createCar = async (req, res) => {
  const { model, color, licensePlate } = req.body;
  const { type, message } = await carService.createCar(
    model,
    color,
    licensePlate,
  );
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  createCar,
};