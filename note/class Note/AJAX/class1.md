
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/makeajaxcall', function (req, res) {
    //res.send('Hello Arshiya!');  // sending string
    // res.status(404).end();
    res.render('ajaxresponse');


});


    <script>

        /*
            readyState  
            --------------------

            0 (uninitialized) or (request not initialized)
            1 (loading) or (server connection established)
            2 (loaded) or (request received)
            3 (interactive) or (processing request)
            4 (complete) or (request finished and response is ready)



            HTTP response status codes 
            ---------------------------
            Informational responses (100–199),
            Successful responses (200–299),
            Redirects (300–399),
            Client errors (400–499),
            and Server errors (500–599).

        */



            // console.log( document.getElementById("makeAjaxrequest"));

            // document.getElementById("makeAjaxrequest").click(function(event){
            //     alert('hiiiiiiiiiiiiiiiiiii');
            // })

            
        document.addEventListener('DOMContentLoaded', (event) => {

            // console.log( document.getElementById("makeAjaxrequest"));

            // document.getElementById("makeAjaxrequest").click(function(event){
            //     alert('hiiiiiiiiiiiiiiiiiii');
            // })

            let callback = (event)=>{
                // console.log(event);
                // window.location.reload();


               //1) crated requestt object 
               let httpRequest = new XMLHttpRequest();



               //2) added event listner
                httpRequest.onreadystatechange = (event)=>{

                    //console.log(httpRequest.readyState);

                    if (httpRequest.readyState === XMLHttpRequest.DONE) {

                        if (httpRequest.status === 200) {
                            // alert(httpRequest.responseText);
                            let div = document.createElement('h1');
                            div.append( document.createTextNode(httpRequest.responseText));
                            document.body.appendChild(div);      

                        }else{
                            alert("say that it is error");
                        }
                       
                    }
               }

                // 3) opening connection
                httpRequest.open('GET', 'makeajaxcall');
         
                // 4) sending connection
                httpRequest.send();
            
            }

            
            document.getElementById("makeAjaxrequest").addEventListener("click", callback);

        });

    </script>
    