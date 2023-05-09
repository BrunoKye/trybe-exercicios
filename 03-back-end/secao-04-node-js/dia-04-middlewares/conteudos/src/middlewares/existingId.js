const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.some((t) => t.id === id);

  if (team) {
    return next();
  }

  res.sendStatus(404).send({ message: 'ID inválido, digite um número.'});
}

module.exports = existingId;