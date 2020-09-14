var express = require('express');
var app = express();
var path = require('path');    // to work with pathes


// configurations
app.use(express.urlencoded());   // this is used for handling post reqeusts
app.use(express.json());    

app.use(express.static(path.join(__dirname, "public"))); 


// single line 
//app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', (req, res) => {

    //1) sending html 
     res.sendFile(path.join(__dirname + '/view/index.html'));
    //res.sendFile(__dirname +  '/view/index.html');


});

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname + '/view/about.html'));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname + '/view/login.html'));
});



module.exports = app;
