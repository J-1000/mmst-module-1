const express = require('express');
const app     = express();
const path    = require('path');
const hbs     = require('hbs'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) { // send the form to the user
  res.render("index");
})

app.get('/search', function (req, res) { // responds to the received form
  res.send(req.query);
})

app.listen(3000, () => console.log('App listening on port 3000!'));