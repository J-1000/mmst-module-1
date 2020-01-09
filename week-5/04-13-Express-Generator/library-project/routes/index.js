const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books', (req, res, next) => {
  Book.find()
    .then(allTheBooksFromDB => {
      // console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render('books', { books: allTheBooksFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});

router.get("/books/add", (req, res, next) => {
  Author.find().then(authors => {
    res.render('book-add', { authors });
  })
    .catch(err => {
      next(err);
    });
});

router.post('/books/add', (req, res, next) => {
  //  console.log(req.body);
  //  const { title, author, description, rating } = req.body;
  //  const bookObject = { title, author, description, rating};
  //  console.log(bookObject);
  const newBook = new Book(req.body);
  newBook.save()
    .then((book) => {
      res.redirect('/books');
    })
    .catch((error) => {
      console.log(error);
    })
});

router.get('/books/edit', (req, res, next) => {
  Book.findOne({ _id: req.query.book_id })
    .then((book) => {
      res.render("book-edit", { book });
    })
    .catch((error) => {
      console.log(error);
    })
});

router.post('/books/edit', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.update({ _id: req.query.book_id }, { $set: { title, author, description, rating } })
    .then((book) => {
      res.redirect('/books');
    })
    .catch((error) => {
      console.log(error);
    })
});

router.get('/books/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId).populate('author')
    .then(theBook => {
      res.render('book-details', { book: theBook });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});

router.post('/reviews/add', (req, res, next) => {
  const { user, comments } = req.body;
  // Book.update({ _id: req.query.book_id }, { $push: { reviews: { user, comments } } })
  Book.findByIdAndUpdate(req.query.book_id, { $push: { reviews: { user, comments } } })
    .then(book => {
      res.redirect('/books/' + req.query.book_id)
    })
    .catch((error) => {
      console.log(error)
    })
});


module.exports = router;
