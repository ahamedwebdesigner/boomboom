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
    res.send('Hello Arshiya!');  // sending string
    // res.status(404).end();

});






module.exports = app;
