import sequelize from 'sequelize';
import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const authors = await Author.findAll();
  console.table(authors.map((author) => author.toJSON()));

  const books = await Book.findAll();
  console.table(books.map((book) => book.toJSON()));

  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: [[sequelize.literal('totalBooks'), 'DESC']],
    raw: true,
  });
  console.log(data);

  process.exit(0);
})();