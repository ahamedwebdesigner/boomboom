
app.get('/', function (req, res) {
    res.render('index');
});




app.get('/paperjs', function (req, res) {
    res.render('paper');
});


app.get('/canvas', function (req, res) {
    res.render('canvas');
});


app.get('/markerjs', function (req, res) {
   
    res.render('marker');
});

//    console.log(httpRequest.readyState );
console.log(httpRequest.DONE ); 
console.log(httpRequest.status ); 