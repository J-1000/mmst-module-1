const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyparser = require("body-parser");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))

app.get('/', (req, res) => { // sends the form to the user
  res.render('user-info-form');
})

app.post('/display-user-info', (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  let superhero = req.body.superhero;

  res.render("index", {
    htm: `<p>
    Your name is ${name}
    Your age is ${age}
    Your favorite superhero is ${superhero}
  </p>`})
});

app.listen(3000, () => console.log('App listening on port 3000!'));