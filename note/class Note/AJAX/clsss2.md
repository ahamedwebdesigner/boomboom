
# Making sincronous call using XmlHttpRequest

Sintax: XMLHttpRequest.open(method, url[, async[, user[, password]]])

        httpRequest.open('GET', 'makeajaxcall',false);

# loading indicator
0. adding latency at server 


        app.get('/makeajaxcall', function (req, res) {
                [....]
                setTimeout(function(){
                    res.render('ajaxresponse');
                    // res.status(404).end();
                }, 4000);//wait 2 seconds    [....]



1. shot test once call back is called

                [....]
                    let callback = (event)=>{
                      **   document.getElementById("loading").innerHTML="Loading ........."  **
                    httpRequest.onreadystatechange = ()=>{
                [....]

2. Hide once compleated

                [....]
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        let div = document.createElement('h1');
                        div.append( document.createTextNode(httpRequest.responseText));
                        document.body.appendChild(div);  
                       ** document.getElementById("loading").innerHTML=" " **
                        
                [....]

3. in case of error remov loding indicater

            document.body.appendChild(div);  
                    document.getElementById("loading").innerHTML=" "
                    console.log(this);
                    
                }else{
                   ** document.getElementById("loading").innerHTML=" " **
                    alert("say that it is error");

4. Using event call backs


# displaying mdole while loading

    <!-- The Modal -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
        </div>
    </div>


        <style>
             /* The Modal (background) */
                .modal {
                display: none; /* Hidden by default */
                position: fixed; /* Stay in place */
                z-index: 1; /* Sit on top */
                left: 0;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgb(0,0,0); /* Fallback color */
                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
                }

                /* Modal Content/Box */
                .modal-content {
                background-color: #fefefe;
                margin: 15% auto; /* 15% from the top and centered */
                padding: 20px;
                border: 1px solid #888;
                width: 80%; /* Could be more or less, depending on screen size */
                }

                /* The Close Button */
                .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                }

                .close:hover,
                .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
                }

    </style>



            let callback = (event)=>{
                document.getElementById("myModal").style.display = "block";

                // remove display after loaded
                document.getElementById("myModal").style.display = "none";



# wording response
    getResponseHeader()	Returns specific header information from the server resource
    getAllResponseHeaders()	Returns all the header information from the server resource


# adding event listners

           httpRequest.addEventListener("progress", ()=>console.log("progress"));
             httpRequest.addEventListener("load", ()=>console.log("load"));
             httpRequest.addEventListener("loadend", ()=>console.log("loadend"));
             httpRequest.addEventListener("error", ()=>console.log("error"));
             httpRequest.addEventListener("abort", ()=>console.log("abort"));



working with xml requst
--------------------------
  // res.type('application/xml');
 // let div = document.createElement('h1');
                            // div.append( document.createTextNode(httpRequest.responseText));
                            // document.body.appendChild(div);  

                            //  document.getElementById('layer1').innerHTML =  httpRequest.responseText;
                            var xmlDoc =httpRequest.responseXML;
                            console.log(xmlDoc.getElementsByTagName('h3')[0]);

                             document.getElementById('layer1').innerHTML =  httpRequest.responseXML.getElementsByTagName('h3')[0].innerHTML;
                    