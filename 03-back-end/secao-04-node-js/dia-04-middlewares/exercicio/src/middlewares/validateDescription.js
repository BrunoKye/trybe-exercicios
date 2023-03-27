const validateDescription = (req, res, next) => {
  const requiredProperties = ['rating', 'difficulty', 'createAt'];
  if (requiredProperties.every((property) => property in req.body.description)) {
    return next();
  }
    
  res.sendStatus(400).json(
    { message: 'Os campos rating, difficulty e createAt são obrigatórios.' }
  ); 
};

module.exports = validateDescription;