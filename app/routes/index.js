const noteRoutes = require('./note_routes');
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
// var http = require('http');
// var fs = require('fs');


module.exports = function(app, db) {
  noteRoutes(app, db);
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // Other route groups could go here, in the future
  // var download = function(url, dest, cb) {
  //   var file = fs.createWriteStream(dest);
  //   var request = http.get(url, function(response) {
  //     response.pipe(file);
  //     file.on('finish', function() {
  //       file.close(cb);  // close() is async, call cb after close completes.
  //     });
  //   }).on('error', function(err) { // Handle errors
  //     fs.unlink(dest); // Delete the file async. (But we don't check the result)
  //     if (cb) cb(err.message);
  //   });
  // };

  // router.post('/files', function(req, res, next) {
  //   res.send('Hello, world!');
  //   console.log('req');
  //   console.log(req);
    
    
  // });

  // router.post("/files", function(req, res){
  //   console.log('node router');
  //   console.log('request :',req);


  //   var file;
  //   if(!req.files) {
  //       res.send("File was not found");
  //       return;
  //   }
  //   file = req.files.FormFieldName;  // here is the field name of the form
  //   file.mv("file.txt", function(err)  //Obvious Move function
  //       {
  //             // log your error
  //             console.log('ERROR load :',err);
  //       });
  //   res.send("File Uploaded");
  // });

  app.post('/files', (req, res) => {
    res.status('200').send({});
    console.log('routes/index. file is here :',req.params);
  });

};