const Book = require("../model/book");

const handleAddBookController = async (req, res) => {
  try {
    const data = req.body;

    const book = await Book.insertOne(data);

    return res.status(200).json({
      message: "Details Added",
      book,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const handelgetAllBooksController = async (req, res) => {
  try {
    const booklist = await Book.find({});

    return res.status(200).json({
      message: "Book details fetched",
      Booklist: booklist,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const handleDeleteBookController = async (req, res) => {
  try {
    const {_id} = req.body;

    const deleted = await Book.deleteOne({ _id });

    return res.status(200).json({
      message: "Book Deleted",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};


module.exports = {
  handleAddBookController,
  handelgetAllBooksController,
  handleDeleteBookController,
};