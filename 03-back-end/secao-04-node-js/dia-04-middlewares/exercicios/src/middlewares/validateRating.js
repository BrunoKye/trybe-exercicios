const validateRating = (req, res, next) => {
  const { rating } = req.body.description;
  const MINIMUM = 1;
  const MAXIMUM = 5;

  if (rating > MINIMUM && rating < MAXIMUM) {
    return next();
  }
    
  res.sendStatus(400).json(
    { message: 'O campo rating deve ser um número inteiro entre 1 e 5.' }
  ); 
};

module.exports = validateRating;