var express = require('express');
var app = express();
var path = require('path');
var appconfig = require('./config');

// reading file
var fs = require("fs");

app.use(express.urlencoded());
app.use(express.json());      // if needed
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', function (req, res) {

    res.render('home');
});

app.get('/makeajaxcall', function (req, res) {
          // sending string
    //res.status(404).end();
  

    setTimeout(()=>{
        // res.send('Hello Arshiya!');
        // res.status(404).end();
            
            // res.set('Content-Type', 'text/xml');
            res.type('application/xml');
            res.render('ajaxresponse');
    },1000);

    // res.send('Today luckey number is  -> '+ Math.floor(Math.random() * 10) + 1);
   


});



app.get('/readfile', function (req, res) {

    res.render('home');
});


module.exports = app;
