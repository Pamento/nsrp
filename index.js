const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
let db             = require('./config/db');
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
// db.once("open", () => console.log("connected to the database"));
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  // Make sure you add the database name and not the collection name
  db = database.db("basket_books")
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
