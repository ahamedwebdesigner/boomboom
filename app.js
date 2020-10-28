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


    setTimeout(() => {
        // res.send('Hello Arshiya!');
        // res.status(404).end();

        // res.set('Content-Type', 'text/xml');
        res.type('application/xml');
        res.render('ajaxresponse');
    }, 1000);

    // res.send('Today luckey number is  -> '+ Math.floor(Math.random() * 10) + 1);



});



app.get('/readfile', function (req, res) {

    res.render('home');
});


let students = [
    { id: 10, name: 'Arshiya', place: 'anantapur' },
    { id: 20, name: 'scott', place: 'America' },
    { id: 30, name: 'tiger', place: 'Amazon' }
]


app.get('/jqajax', function (req, res) {
    res.render('jqajax');
});

app.get('/student-search', function (req, res) {
    // res.status(404).end()  

    // console.log("================");
    // console.log(req.query.id)
    // console.log("================");

    setTimeout(() => {
        let student = students.find(stu => stu.id == req.query.id);
        if (undefined != student) {
            res.json(student)
        } else {
            res.json({ Message: 'student not found' });
        }
    }, 1000);


});

app.post('/store-student', function (req, res) {

    console.log("================");
    console.log(req.body)
    console.log("================");
    setTimeout(() => {
        students.push(req.body)
        res.send('submitted data');
    }, 1000);
});


app.get('/all-students', function (req, res) {
    setTimeout(() => {
        res.json(students)
    }, 4000);
});

// app.get('/student-delet', function (req, res) {
app.delete('/student-delet', function (req, res) {

    students = students.filter(function (obj) {
        return obj.id != req.query.id;
    });

    setTimeout(() => {
        res.json({ status: 'success', message: "student deleted successefully" })
    }, 1000);


});




module.exports = app;
