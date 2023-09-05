const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
}; 

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

const update = async (id) => {
  const book = await Book.update({ title, author, pageQuantity });
  return book;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};