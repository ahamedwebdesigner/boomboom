var express = require('express');
var app = express();
var path = require('path');
var appconfig = require('./config');


app.use(express.urlencoded());
app.use(express.json());      // if needed

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'newViews'));


app.get('/', function (req, res) {
    // console.log(req.query); // 1. checking for all the query params requested
    // console.log(req.query.id);

    var students = {
        '001':'Arshiya',
        '002':'Shabana',
        '003':'Reshma'    }
    // req.query.id  == one

    res.render('index',{stuName:students[req.query.id]});
});

app.get('/students/:id/:name/:msg',(req,res)=>{

    console.log(req.params); // to print all the params
    res.render('index',{stuName:'Arshiya shaik'});
});


app.get('/students/new',(req,res)=>{
    res.render('students/new');
});


app.post('/students/save',(req,res)=>{

    console.log("--------------------------------------------");
    console.log( req.body);
    console.log("--------------------------------------------");
    
    res.send("<h1> student saved </h1>");
});
   


module.exports = app;
