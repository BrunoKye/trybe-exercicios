const app = require('./app');

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
