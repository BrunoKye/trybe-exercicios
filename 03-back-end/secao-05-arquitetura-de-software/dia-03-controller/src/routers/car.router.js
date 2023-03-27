const express = require('express');

const { carController } = require('../controllers');
const validateCar = require('../middlewares/validateCar');

const router = express.Router();

router.post('/', validateCar, carController.createCar);