const StuAjax = {
    init: () => {
        $('#loadDATA').click(StuAjax.JQsearchById);
        $('#createStudent').submit(StuAjax.jqsubmitStudent);
        // StuAjax.loadStudentsData();
        StuAjax.jQloadStudentsData();

    },
    JQsearchById: () => {
        StuAjax.showModel()
        let searchstu = $.get(
                "student-search", 
                { id: $("[name='searchID']").val() }, 
                function (data, status) {
                         $("<h2/>", { text: data.name + " ", }).append($("<small>").text(data.place)).appendTo("#dataloder");
                         StuAjax.hideModel();
                }).always(function() {
                    StuAjax.hideModel();
                  });
        


    },
    loadStudentsData: () => {
      
        txt = "";
        let xhrDataLoder = new XMLHttpRequest();
        xhrDataLoder.onreadystatechange = () => {
            if (xhrDataLoder.readyState === xhrDataLoder.DONE) {
                if (xhrDataLoder.status === 200) {
                    let students = JSON.parse(xhrDataLoder.responseText);
                    txt += "<table class='table'>";
                    txt += "<tr><th>ID</th> <th>Name</th><th>Place</th> <th>Delet</th>  </tr>";
                    for (x in students) {
                        txt += "<tr class='student'> " + "<td>" + students[x].id + "</td>" + "<td>" + students[x].name + "</td>" + "<td>" + students[x].place + "</td>" + "<td> <button class='btn btn-primary' data-id=" + students[x].id + ">delet  <span class='spinner-border spinner-border-sm'></span> </button> </td>" + "</tr>";
                    }
                    txt += "</table>";
                    document.getElementById("loadstudents").innerHTML = txt;
                    $("#Loding-modal").modal("hide");
                    StuAjax.adddeletEventsTODOm();
                }
            }
        };
        xhrDataLoder.open("GET", '/all-students');
        xhrDataLoder.send();
    },

    jQloadStudentsData:()=>{
        // var table = $('<table>').addClass('table');
        // var tableHeader = $('<tr>');

        //1) sending Ajax request
        $.get( "/all-students",(data,textStatus,jqXHR )=>{
            // // 2) CREATING table header
            // var datakeys = Object.keys(data[0]);
            // $.each(datakeys, function(i, item) {
            //     // tableHeader.append($('<th>'+item+'</th>'));
            //     $("<th/>", { text: item }).appendTo(tableHeader);
            //     if (i === (datakeys.length - 1)) {
            //         $("<th/>", { text: 'delet' }).appendTo(tableHeader) 
            //     }
            //  })
            // table.append(tableHeader);



            // // end of 
            //     $.each(data, function(i, item) {
            //         var row = $('<tr></tr>').addClass('student');
            //         row.append($('<td>'+item.id+'</td>'));
            //         row.append($('<td>'+item.name+'</td>'));
            //         row.append($('<td>'+item.place+'</td>'));
            //         $('<th><button class="btn btn-primary" data-id = '+ item.id+'>Delet<span class="spinner-border spinner-border-sm"></span> </button></th>').appendTo(row)
            //         table.append(row);
            //    });

            // $("#loadstudents").append(table);

            $("#loadstudents").append(StuAjax.jsonArrayToHtml(data));
            StuAjax.adddeletEventsTODOm();

         
        }); 
    },

    jsonArrayToHtml:(data)=>{
        var table = $('<table>').addClass('table');
        var tableHeader = $('<tr>');
         // 2) CREATING table header
         var datakeys = Object.keys(data[0]);
         $.each(datakeys, function(i, item) {
             // tableHeader.append($('<th>'+item+'</th>'));
             $("<th/>", { text: item }).appendTo(tableHeader);
             if (i === (datakeys.length - 1)) {
                 $("<th/>", { text: 'delet' }).appendTo(tableHeader) 
             }
          })
         table.append(tableHeader);
        // end of 
        $.each(data, function(i, item) {
            var row = $('<tr></tr>').addClass('student');
            row.append($('<td>'+item.id+'</td>'));
            row.append($('<td>'+item.name+'</td>'));
            row.append($('<td>'+item.place+'</td>'));
            $('<th><button class="btn btn-primary" data-id = '+ item.id+'>Delet<span class="spinner-border spinner-border-sm"></span> </button></th>').appendTo(row)
            table.append(row);
        });

        return table;
    },

    submitStudent: (event) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // alert(xhr.responseText);
                    document.getElementById("submittedStatus").style.display = "block";
                    StuAjax.loadStudentsData();
                    $("#Loding-modal").modal("hide");

                    setTimeout(() => {
                        document.getElementById("submittedStatus").style.display = "none";
                    }, 4000);


                }{
                    // failure functionality
                }

            }
        };

        $("#Loding-modal").modal("show");
        event.preventDefault();

        var userdata = '';
        userdata += "id=" + document.getElementsByName('id')[0].value + '&';
        userdata += "name=" + document.getElementsByName('name')[0].value + '&';
        userdata += "place=" + document.getElementsByName('place')[0].value;

        console.log(userdata);
        xhr.open("POST", '/store-student');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(userdata);
    },

    jqsubmitStudent:(event)=>{  // using javascript
        event.preventDefault();

        console.log($("#createStudent").serialize());





        $("#Loding-modal").modal("show");


        // 1.selecting form fields using javascript
        var formdata ={
            id: document.getElementsByName('id')[0].value,
            name:document.getElementsByName('name')[0].value,
            place:document.getElementsByName('place')[0].value,
        };

           // 2.selecting form fields using jquery
        var JQformdata ={
            id: $("[name='id']").val(),
            name:$("[name='name']").val() ,
            place:$("[name='place']").val(),
        };


        // $.post(url,{},()=>{}).done(()=>{}).fail(()=>{})
        $.post(
                '/store-student',  
               // JQformdata, 
               $("#createStudent").serialize(),  // form serilized string
                 function(data, status, xhr) {
                    console.log("===============");
                    console.log(data);
                    console.log(status);
                    console.log(xhr);

                    console.log("===============");

                    document.getElementById("submittedStatus").style.display = "block";
                    StuAjax.loadStudentsData();

                    setTimeout(() => {
                        document.getElementById("submittedStatus").style.display = "none";
                    }, 4000);
                })
        .done(function() { 
                $("#Loding-modal").modal("hide");
        })
        .fail(function(jqxhr, settings, ex) { 
            alert('failed, ' + ex);
         });


    },

    adddeletEventsTODOm: () => {
        let deletXhr = new XMLHttpRequest();

        deletXhr.onreadystatechange = () => {
            if (deletXhr.readyState === XMLHttpRequest.DONE) {
                if (deletXhr.status === 200) {
                    StuAjax.loadStudentsData();
                    $("#Loding-modal").modal("hide");
    
                }
            }
        };
    
        $('.student button > span').hide();
        var elements = $('.student button');
        elements.click((event) => {
            $(event.target).find("span").show();
            var stuid = "id=" + $(event.target).data('id');
            deletXhr.open("DELETE", 'student-delet' + "?" + stuid);
            deletXhr.send();
        })
    },
    showModel:()=>{
        $("#Loding-modal").modal("show");
    },
    hideModel:()=>{
        $("#Loding-modal").modal("hide");
    }

};
$(document).ready(StuAjax.init);

