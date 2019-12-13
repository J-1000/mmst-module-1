const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.render('user-info-form');
})

app.get('/display-user-info', (req, res) => {

});

app.post('/display-user-info', (req, res) => {
  res.send(req.body.age);
});

app.listen(3000, () => console.log('App listening on port 3000!'));