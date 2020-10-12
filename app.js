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





app.get('/jqajax', function (req, res) {
    res.render('jqajax');
});

app.get('/senddata', function (req, res) {

    let students = [
        {id:10,name:'Arshiya'},
        {id:20,name:'scott'},
        {id:30,name:'tiger'}
    ]
    setTimeout(()=>{
        console.log("================");
         console.log(req.query);
        // console.log(req.params);
        console.log("================");

        let student = students.find(stu => stu.id == req.query.id);

        console.log("================");
        console.log(student);
        console.log("================");
        res.send('Hello '+student.name +'!');
    
    },1000);
});


module.exports = app;
