const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js')
const uploadCloud = require('../config/cloudinary.js');


router.get('/movie/add', (req, res, next) => {
  res.render('movie-add');
});

router.post('/movie/add', uploadCloud.single('poster'),
  (req, res, next) => {
    const { title, description } = req.body;
    const imgPath = req.file.url; // <-- Value coming from MULTER package with the 
    const imgName = req.file.originalname;
    const newMovie = new Movie({ title, description, imgPath, imgName })
    newMovie.save()
      .then(movie => {
        res.redirect('/');
      })
      .catch(error => {
        console.log(error);
      })
  });



router.get('/', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('index', { movies });
    })
    .catch((error) => {
      console.log(error);
    })
});

module.exports = router;
