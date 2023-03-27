const express = require('express');

const { passengerController } = require('../controllers');
const { validateNewPassenger, validateRequestTravel }  = require('../middlewares');

const router = express.Router();

const { listPassengers, getPassenger, 
  createPassenger, createTravel } = passengerController;

router.get('/', listPassengers);
router.get('/:id', getPassenger);
router.post('/', validateNewPassenger, createPassenger);
router.post('/:passengerId/request/travel', validateRequestTravel, createTravel);

module.exports = router;