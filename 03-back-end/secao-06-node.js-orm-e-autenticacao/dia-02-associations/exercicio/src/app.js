const bodyParser = require('body-parser');
const express = require('express');

const { getAccountById, getAccountByIdLazy,
  saveAccountAndProfile } = require('./controllers/accounts.controller');
const { getCommentsByAccountId, saveComment } = require('./controllers/comments.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', getAccountById);
app.get('/accounts-v2/:id', getAccountByIdLazy);
app.get('/accounts/:id/comments', getCommentsByAccountId);

app.post('/accounts', saveAccountAndProfile);
app.post('/accounts/:id/comment', saveComment);

module.exports = app;
