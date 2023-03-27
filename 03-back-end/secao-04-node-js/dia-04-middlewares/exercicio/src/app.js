const express = require('express');
const generateToken = require('./utils/generateToken');
const validateActivity = require('./middlewares/validateActivity');
const validateDescription = require('./middlewares/validateDescription');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateCreatAt = require('./middlewares/validateCreateAt');
const validateToken = require('./middlewares/validateToken');

const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const newToken = generateToken();
  res.status(200).json({ token: newToken });
});

app.post('/activities', 
  validateActivity, validateDescription, validateRating, 
  validateDifficulty, validateCreatAt, validateToken,
  (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;