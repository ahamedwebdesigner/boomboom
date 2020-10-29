    var arr = ['a', 'b', 'c'];  
    $.each(arr , function (index, value){  
        console.log("================");   
        console.log(index);  
        console.log(value);  
        console.log("================");    
    });  


    var arr = ['a', 'b', 'c'];    
    arr.forEach(function(element) {  
        console.log(element);  
    }); 




 if (i === (data.length - 1)) {
                    $("<th/>", { text: 'delet' }).appendTo(tableHeader)
                }
    




let students2 = [
    { id: 10, nameStudent: 'Arshiya', place: 'anantapur' },
    { id: 20, nameStudent: 'scott', place: 'America' },
    { id: 30, nameStudent: 'tiger', place: 'Amazon' }
]

    jQloadStudentsData:()=>{
        var table = $('<table>').addClass('table');
        var tableHeader = $('<tr>').addClass('none');

        $.get( "/all-students", 
            function(data) { 
                
                var datakeys = Object.keys(data[0]);
                $.each(datakeys, function(i, item) {
                    // tableHeader.append($('<th>'+item+'</th>'));
                    $("<th/>", { text: item }).appendTo(tableHeader)

                })
                table.append(tableHeader);

                $.each(data, function(i, item) {
                    var row = $('<tr></tr>');
                    $(item).each(function (j, cellData) {
                        row.append($('<td>'+cellData.id+'</td>'));
                        row.append($('<td>'+cellData.name+'</td>'));
                        row.append($('<td>'+cellData.place+'</td>'));
                        row.append($('<td> <button class='btn btn-primary' data-id=" + cellData.id + ">delet  <span class='spinner-border spinner-border-sm'></span> </button> </td>'));
                    });
                    table.append(row);
                });
                
                $("#loadstudents").append(table)

            }); 
         console.log(table.get(0));

    },

    "