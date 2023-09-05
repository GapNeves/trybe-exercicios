const BooksService = require('../service/Books.service');

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
    const book = await BooksService.getById(req.params.id);
    
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BooksService.create({ title, author, pageQuantity });

  res.status(201).json(book);
};

const update = async (req, res) => {
  const bookId = await BooksService.getById(req.params.id);
    
  if (!bookId) return res.status(404).json({ message: 'Book not found' });

  const book = await BooksService.update(req.params.id);

  return res.status(200).json(book);
};

module.exports = {
  getAll,
  getById,
  create,
};