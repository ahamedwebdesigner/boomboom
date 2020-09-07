var express = require('express');
var app = express();
var path = require('path');
var appconfig = require('./config');


app.use(express.urlencoded());
app.use(express.json());      // if needed

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'myview'));



app.get('/', function (req, res) {
    res.render('index',{title:appconfig.appName});
})

app.get('/product', (req,res)=>{res.render('product',{
                                        title:appconfig.appName,
                                        description:'THis is all about products '
                                    })})

app.get('/test',function(request,response){

    console.log("--------------------------------------------");
    //console.log(request.headers);
    console.log(request.query);
     
    console.log("--------------------------------------------");

    response.render('index',{title:appconfig.appName})
})




app.get('/student/:id/:message',(req,res)=>{

    let students = [
        {name:'arshiya'  , place:'Bhagyanagar '   }, //0
        {name: 'shabana' , place:'Sainagar '  },
        {name: 'reshma'  , place:'Usa '  },
        {name: 'Zabiulla', place:'Bangalore '  }
    ];

    let messages={
        hellow:'Hellow how are you',
        bye:"I am very sad to say good bye"
    }
      
    console.log("--------------------------------------------");
    console.log(req.params.id);
    console.log("--------------------------------------------");
    var stuid;
    if(req.params.id>students.length-1){
         stuid = 0;
    }else{
        stuid = req.params.id;
    }
    res.render('student',{
                    title:appconfig.appName,
                    studentId: students[stuid],
                    message: messages[req.params.message]
                });
});



app.get('/create-student',(req,res)=>{
    res.render('studentform',{
        title:appconfig.appName
     });
})
app.post('/save-student',(req,res)=>{

    console.log("--------------------------------------------");
    console.log( req.body);
    console.log("--------------------------------------------");

    res.render('studentSaved',{
        title:appconfig.appName,
        studentName:req.body.studentName
     });
    //res.sendStatus(200);
})



module.exports = app;
