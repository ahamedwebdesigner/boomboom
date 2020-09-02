var express = require('express');
var app = express();
var path = require('path');
var appconfig = require('./config');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'myview'));



app.get('/', function (req, res) {
    res.render('index',{title:"First node application"});
})

app.get('/product', (req,res)=>{res.render('product',{
                                        title:"THis is products page",
                                        description:'THis is all about products '
                                    })})




module.exports = app;
