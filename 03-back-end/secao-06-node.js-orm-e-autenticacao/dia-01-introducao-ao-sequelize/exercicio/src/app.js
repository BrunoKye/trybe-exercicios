const express = require('express');

const Book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/books', Book.getAll);
app.get("/books/:id", Book.getById);

app.post('/books', Book.create);
app.put('/books/:id', Book.update);
app.delete('/books/:id', Book.remove);

module.exports = app;