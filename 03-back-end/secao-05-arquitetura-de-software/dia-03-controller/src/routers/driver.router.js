const express = require('express');

const { driverController } = require('../controllers');
const { validateDriverName }  = require('../middlewares');

const router = express.Router();

const { getDrivers, openTravel, createDriver } = driverController;


router.get('/', getDrivers);
router.get('/open/travels', openTravel);
router.post('/', validateDriverName, createDriver);

router.put('/:driverId/travels/:travelId/assign', async (req, res) => {
  const { travelId, driverId } = req.params;
  const { type, message } = await driverService.travelAssign({
    travelId,
    driverId,
  });

  if (type) return res.status(type).json(message);
  res.status(200).json(message);
});

router.put('/:driverId/travels/:travelId/start', async (req, res) => {
  const { travelId, driverId } = req.params;
  const { type, message } = await driverService.startTravel({
    travelId,
    driverId,
  });

  if (type) return res.status(type).json(message);
  res.status(200).json(message);
});

router.put('/:driverId/travels/:travelId/end', async (req, res) => {
  const { travelId, driverId } = req.params;
  const { type, message } = await driverService.endTravel({
    travelId,
    driverId,
  });

  if (type) return res.status(type).json(message);
  res.status(200).json(message);
});

module.exports = router;