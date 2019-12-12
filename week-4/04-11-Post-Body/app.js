const express = require('express');
const app     = express();
const path    = require('path');
const hbs     = require('hbs'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('user-info-form');
})

app.get('/display-user-info', (req, res) => {
  
});

app.listen(3000, () => console.log('App listening on port 3000!'));