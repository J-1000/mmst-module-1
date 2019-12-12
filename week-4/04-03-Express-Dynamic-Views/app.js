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
    // lastName:"Pan",
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlin"],
     location: "<h1>Ingolstadt</h1>",
     contact: {
      street: "Kurt-Schumacher-Strasse",
      phone: "0138 36785",
      mail: "peter.pan@mail.com",
      web: "www.peter-pan.com"
    }
 }
  res.render("myPage", theData);
});

app.listen(3000);
