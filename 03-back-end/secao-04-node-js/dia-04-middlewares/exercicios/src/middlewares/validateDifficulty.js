const normalizeText = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const validateRating = (req, res, next) => {
  const { difficulty } = req.body.description;
  const difficulties = ['fácil', 'médio', 'difícil'];
  const userInput = normalizeText(difficulty.toLowerCase());

  if (userInput in difficulties) {
    return next();
  }
    
  res.sendStatus(400).json(
    { message: 'O campo difficulty deve ser \"Fácil\", \"Médio\" ou \"Difícil\".' }
  ); 
};

module.exports = validateRating;