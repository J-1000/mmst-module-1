var express = require("express");
var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/meineSeite", (req, res, next) => {
 let theData={
     name:"Peter",
     lastName:"Pan",
     location: "<h1>Ingolstadt</h1>"
 }
  res.render("myPage", theData);
});

app.listen(3000);
