const StuAjax = {
    init: () => {
        $('#loadDATA').click(StuAjax.JQsearchById);
        StuAjax.loadStudentsData();
        $('#createStudent').submit(StuAjax.submitStudent);
    },
    JQsearchById: () => {
        $.get("student-search", { id: $("[name='searchID']").val() }, function (data, status) {
            $("<h2/>", { text: data.name + " ", }).append($("<small>").text(data.place)).appendTo("#dataloder");
        });
    },

    loadStudentsData: () => {
        $("#Loding-modal").modal("show");
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


                }
            }
        };

        $("#Loding-modal").modal("show");
        event.preventDefault();

        var userdata = '';
        userdata += "id=" + document.getElementsByName('studentsId')[0].value + '&';
        userdata += "name=" + document.getElementsByName('studentName')[0].value + '&';
        userdata += "place=" + document.getElementsByName('studentPlace')[0].value;

        console.log(userdata);
        xhr.open("POST", '/store-student');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(userdata);
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
    }
};
$(document).ready(StuAjax.init);

