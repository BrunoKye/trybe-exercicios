const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    return next();
  }
    
  res.sendStatus(400).send({ message: 'É necessário preencher o nome e a sigla do time.' }); 
};

module.exports = validateTeam;