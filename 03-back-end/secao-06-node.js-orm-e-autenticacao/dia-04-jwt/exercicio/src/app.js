const express = require('express');
const cors = require('cors');

const { PORT } = process.env;

const { login, ping, me, topSecret, 
  signup } = require('./controllers');
const { auth, error, admin } = require('./middlewares');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.get('/ping', ping);
app.get('/users/me', auth, me);
app.get('/top-secret', auth, admin, topSecret);

app.post('/login', login);
app.post('/signup', signup);

app.use(error);

module.exports = app;
