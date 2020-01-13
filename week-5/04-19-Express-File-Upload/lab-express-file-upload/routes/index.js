const express = require('express');
const router = express.Router();

const Picture = require('../models/picture');

const multer = require('multer');
const upload = multer({ dest: './public/uploads/' });

router.post('/upload', upload.single('photo'), (req, res) => {

  const pic = new Picture({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname
  });

  pic.save((err) => {
    res.redirect('/');
  });
});


/* GET home page */
router.get('/', function (req, res, next) {
  Picture.find((err, pictures) => {
    res.render('index', { pictures })
  })
});

module.exports = router;
