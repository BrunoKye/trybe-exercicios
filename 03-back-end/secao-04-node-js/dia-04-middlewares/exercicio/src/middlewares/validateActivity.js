const validateActivity = (req, res, next) => {
  const requiredProperties = ['name', 'price', 'description'];
  if (requiredProperties.every((property) => property in req.body)) {
    return next();
  }
    
  res.sendStatus(400).json(
    { message: 'Os campos name, price e description são obrigatórios.' }
  ); 
};

module.exports = validateActivity;