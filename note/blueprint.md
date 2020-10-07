<script>

    var makerjs = require('makerjs');
    var Hline = { 
            type: 'line', 
            origin: [0, 0], 
            end: [0, 150] 
        };

    var Pline = { 
        type: 'line', 
        origin: [0, 0], 
        end: [150, 0] 
    };

        var circle = { 
            type: 'circle', 
            origin: [0, 0],
            radius: 100
        };

        var model = {
            paths: {
             "0": new makerjs.paths.Line([0, 0], [400, 0]),     // hline
             "1": new makerjs.paths.Line([0, 0], [0, 200]),
             "2": new makerjs.paths.Line([0, 200], [400, 200]),
             "3": new makerjs.paths.Line([400, 0], [400, 200]),
           }
        };


    var pathArray = [ Hline, Pline,circle ];




    var line1 = { 
    type: 'line', 
    origin: [0, 0], 
    end: [0, 200] 
    };


    //  two circles
    var circle1 = { 
        type: 'circle', 
        origin: [0, 120],
        radius: 50
        };

    var circle2 = { 
        type: 'circle', 
        origin: [0, 0],
        radius: 100
        };

   var jointCircle = [ circle1, circle2,line1 ];

    var svg = makerjs.exporter.toSVG(jointCircle);
    //document.write(svg);

   window.onload = ()=>{
    var el = document.getElementById('container');
    el.innerHTML =svg;
   }


   //

   
     var makerjs = require('makerjs');
     function myModel() {
        var line = { 
        type: 'line', 
        origin: [0, 0], 
        end: [50, 50] 
        };

        var circle = { 
        type: 'circle', 
        origin: [0, 0],
        radius: 50
        };

        var pathObject = { myLine: line, myCircle: circle };

        //set properties using the "this" keyword
        this.paths = pathObject;
    }

    var model1 = new myModel();
    var model2 = new myModel();

    //they will be on top of each other, so let's move the origin
    model2.origin = [100, 0];

    var modeloutput = { 
    models: { "myModel1": model1, "myModel2": model2 }
    };




 var makerjs = require('makerjs');

        var line = new makerjs.paths.Line([0, 0], [50, 50]);
        var circle = new makerjs.paths.Circle([0, 0], 50);
        var arc = new makerjs.paths.Arc([0, 0], 25, 0, 180);
        var arc = new makerjs.paths.Arc([0, 0], 125, 0, 180);
        
        var svg = makerjs.exporter.toSVG([line, circle, arc]);




</script>