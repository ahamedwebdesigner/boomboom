# 1 basic drawing

var makerjs = require('makerjs');





   var svg = makerjs.exporter.toSVG(line);
   
// var svg = makerjs.exporter.toSVG(modeloutput);
window.onload = ()=>{
    var el = document.getElementById('container');
    el.innerHTML =svg;
}
  

# 2 darawing two pathers at time

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

var pathArray = [ line, circle ];

var svg = makerjs.exporter.toSVG(pathArray);


# drawing multiple simple objects

        var line1 = { 
            type: 'line', 
            origin: [0, 0], 
            end: [50, 50] 
        };
        
        var line2 = { 
            type: 'line', 
            origin: [0, 0], 
            end: [150, 150] 
        };

        var line3 = { 
            type: 'line', 
            origin: [0, 0], 
            end: [250, 250] 
        };

        var circle_inner = { 
            type: 'circle', 
            origin: [0, 0],
            radius: 50
        };
        
        var circle_side = { 
            type: 'circle', 
            origin: [10, 10],
            radius: 150
        };


        var circle_outer = { 
            type: 'circle', 
            origin: [0, 0],
            radius: 150
        };
        var pathArray = [ line1, circle_inner,circle_outer ,line2,line3,circle_side];
        var svg = makerjs.exporter.toSVG(pathArray);

# using modeles


function myModel() {

    var lineone = { 
      type: 'line', 
      origin: [0, 0], 
      end: [150, 150] 
     };
   
     var lineone2 = { 
        type: 'line', 
        origin: [0, 0], 
        end: [-250, -250] 
       };
   
       
    var circle_one = { 
      type: 'circle', 
      origin: [0, 0],
      radius: 50
     };

     var circle_one = { 
        type: 'circle', 
        origin: [0, 0],
        radius: 150
       };
   
       

    var pathObject = { LineOne: lineone, CircleOne: circle_one,LineTwo:lineone2 };
   
   //set properties using the "this" keyword
    this.paths = pathObject;
   }
   
   //note we are using the "new" operator
   var svg = makerjs.exporter.toSVG(new myModel());
   
# constructors


var line = { 
  type: 'line', 
  origin: [0, 0], 
  end: [50, 50] 
 };
 
var svg = makerjs.exporter.toSVG(line);





# using multiple model instances

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

    var model = { 
        models: { "myModel1": model1, "myModel2": model2 }
      };



# working with constructor


function line() { 
    this.type = 'line', 
    this.origin = [0, 0], 
    this.end = [80, 180] 
   };
   
  var svg = makerjs.exporter.toSVG(new line());




# working with pathes hellow

  var model = {
    paths: {
      "v": new makerjs.paths.Line([0, 0], [0, 100]),
      "h": new makerjs.paths.Line([0, 0], [100, 0]),
      "arc":new makerjs.paths.Arc([0, 0], 100, 0, 90)
    }
};
var svg = makerjs.exporter.toSVG(model);



# Resourses

var model = {

    paths: {
      "h1": new makerjs.paths.Line([0, 10], [30, 10]),
      "h2": new makerjs.paths.Line([0, 20], [30, 20]),
      "v1": new makerjs.paths.Line([10, 0], [10, 30]),
      "v2": new makerjs.paths.Line([20, 0], [20, 30])
    }
  
  };
  
  var svg = makerjs.exporter.toSVG(model);

# Path independence and Chains

var model = {
    paths: {
      "0": new makerjs.paths.Line([0, 0], [100, 0]),
      "1": new makerjs.paths.Line([100, 0], [100, 100]),
      "2": new makerjs.paths.Line([100, 100], [200, 100]),
      "3": new makerjs.paths.Line([0, 0], [0, 100]),

    }
};

# Moving models


function Squares() {
    this.models = {
        s1: new makerjs.models.Square(100),
         s2: makerjs.model.move(new makerjs.models.Square(100), [250, 0]),
        // s3: new makerjs.models.Square(100),
        // s4: new makerjs.models.Square(200)
    };
     this.models.s2.origin = [300, 0];
}

var makerjs = require('makerjs');
var squares = new Squares();

// //move some squares by a relative distance
// makerjs.model.moveRelative(squares.models.s2, [-200, 10]);
// makerjs.model.moveRelative(squares.models.s3, [-200, 20]);
// makerjs.model.moveRelative(squares.models.s4, [-400, 20]);

var svg = makerjs.exporter.toSVG(squares);



# moving lines in a model



function Squares() {
    this.models = {
        s1: new makerjs.models.Square(100),
     
    };

}

var makerjs = require('makerjs');
var squares = new Squares();

//move a path by a relative distance
makerjs.path.moveRelative(squares.models.s1.paths.ShapeLine3, [0, 20]);

//move a path to an absolute point
makerjs.path.move(squares.models.s1.paths.ShapeLine1, [60, 20]);

var svg = makerjs.exporter.toSVG(squares);



# basic  modeling 1


var points = [
    [100, 0], [100, 100], [0, 175], [-100, 100], [-100, 0],
    [-20, 0], [-20, 80], [20, 80], [20, 0]
  ];
  
  var house = new makerjs.models.ConnectTheDots(true, points);


  var window1 = new makerjs.models.Square(40);
  window1.origin = [40, 40];
  
  var window2 = new makerjs.models.Square(40);
  window2.origin = [-80, 40];
  
  var houseWithWindows = {
    models: { "myHouse": house, "window1": window1, "window2": window2 }
  };
  var svg = makerjs.exporter.toSVG(houseWithWindows);





# 

//#Basic modeling
       

var outer = new makerjs.models.RoundRectangle(200, 280, 8);

var inner = new makerjs.models.RoundRectangle(160, 230, 8);
inner.origin = [20, 30];

var buttonhole = new makerjs.paths.Circle([100, 15], 8);

var bolts = new makerjs.models.BoltRectangle(180, 260, 2);
bolts.origin = [10, 10];

var tabletFaceMount = {
  paths: { buttonhole: buttonhole },
  models: { inner: inner, outer: outer, bolts: bolts }
};

var svg = makerjs.exporter.toSVG(tabletFaceMount);



## Examples 
## -------------------------------------------------------------

### 1) Mobile phone

var outer = new makerjs.models.RoundRectangle(200, 280, 8);

var inner = new makerjs.models.RoundRectangle(160, 230, 8);
inner.origin = [20, 30];

var buttonhole = new makerjs.paths.Circle([100, 15], 8);

var bolts = new makerjs.models.BoltRectangle(180, 260, 2);
bolts.origin = [10, 10];

var tabletFaceMount = {
  paths: { buttonhole: buttonhole },
  models: { inner: inner, outer: outer, bolts: bolts }
};

var svg = makerjs.exporter.toSVG(tabletFaceMount);


# ring of circles



var model = {
    models: {
      ring1: new makerjs.models.Ring(62, 100),
      bc1: new makerjs.models.BoltCircle(90, 4, 10),
      bc2: new makerjs.models.BoltCircle(55, 8, 6, 30)
    }
  };
  
  var svg = makerjs.exporter.toSVG(model);



# bolt rectangle


function truckBolts() {
    var tx = 10 + 5/8;
    var ty = 10 + 1/8;
    var bolts = new makerjs.models.BoltRectangle(tx, ty, 7/32 / 2);
    bolts.origin = [tx / -2, ty / -2];
  
    this.models = [bolts];
  }


function deck(width, length, truckOffset) {
    var board = new makerjs.models.Oval(length, width);
    board.origin = [0, width / -2];

    var truck1 = new truckBolts();
    truck1.origin = [truckOffset, 0];

    var truck2 = new truckBolts();
    truck2.origin = [length - truckOffset, 0];

    this.models = { board: board,truck1: truck1,truck2: truck2};
}

var svg = makerjs.exporter.toSVG(new deck(80, 260, 20));





# stringifying m dole in to json and saving


var outer = new makerjs.models.RoundRectangle(200, 280, 8);

var inner = new makerjs.models.RoundRectangle(160, 230, 8);
inner.origin = [20, 30];

var buttonhole = new makerjs.paths.Circle([100, 15], 8);

var bolts = new makerjs.models.BoltRectangle(180, 260, 2);
bolts.origin = [10, 10];

var tabletFaceMount = {
  paths: { buttonhole: buttonhole },
  models: { inner: inner, outer: outer, bolts: bolts }
};

var json = JSON.stringify(tabletFaceMount);


# Measuring
## ----------------------------------------------------------


var arc = new makerjs.paths.Arc([0, 0], 100, 45, 135);
var m = makerjs.measure.pathExtents(arc);

console.log('measurement:');
console.log(m);

var totalWidth = m.high[0] - m.low[0];
var totalHeight = m.high[1] - m.low[1];

var measureRect = new makerjs.models.Rectangle(totalWidth, totalHeight);
measureRect.origin = m.low;

var model = {
    paths: {
        arc: arc
    },
    models: {
        measureRect: measureRect
    }
};

var svg = makerjs.exporter.toSVG(model, {useSvgPathOnly: false});





# changing orizon to the modle



var model = {
    models: {
  
      crosshairs: {
        paths: {
          h: new makerjs.paths.Line([-5, 0], [5, 0]),
          v: new makerjs.paths.Line([0, -5], [0, 5])
        }
      },
  
      nut: {
        models: {
          polygon: new makerjs.models.Polygon(6, 40)
        },
        paths: {
          inner: new makerjs.paths.Circle(20)
        }
      }
  
    }
  };
  
  // NOTE: making entire modle nut to zero
  makerjs.model.zero(model.models.nut);
  
  var svg = makerjs.exporter.toSVG(model);


# simple orizon


var model = {
    models: {
  
      crosshairs: {
        paths: {
          h: new makerjs.paths.Line([-5, 0], [5, 0]),
          v: new makerjs.paths.Line([0, -5], [0, 5])
        }
      },
  
      box: {
        models: {
          outer: new makerjs.models.Rectangle(60, 30),
          inner: new makerjs.models.Oval(45, 15)
        }
      }
  
    }
  };
  
  //NOte: selecting part of the models and changing orizon to center
  var shortcut = model.models.box.models;
  
  makerjs.model.center(shortcut.outer);
  makerjs.model.center(shortcut.inner);
  
var svg = makerjs.exporter.toSVG(model);





# changing origins


function box(origin) {
    this.models = {
        outer: new makerjs.models.RoundRectangle(100, 100, 1)
    };
    this.paths = {
      inner: new makerjs.paths.Circle([50, 50], 25)
    };

    this.origin = origin;
}

var box1 = new box([0, 0]);
var box2 = new box([150, 0]);

var model = {
    models: {
        box1: box1,
        box2: box2
    }
};

//move all path origins into the same space
makerjs.model.originate(model);

var svg = makerjs.exporter.toSVG(model);




# scaling , distort , rotate
### example 1: scaling path

// scale path and map
var arc1 = new makerjs.paths.Arc([0, 0], 25, 0, 90);
var arc2 = new makerjs.paths.Arc([0, 0], 25, 0, 90);

arc2 = makerjs.path.scale(arc2, 6);

var svg = makerjs.exporter.toSVG({ paths: { arc1: arc1, arc2: arc2 }});


### example 2 scaling modle
var model = {
  models: {
    inner: new makerjs.models.Polygon(6, 40),
    outer: makerjs.model.scale(new makerjs.models.Polygon(6, 40), 1.7)
  }
};

var svg = makerjs.exporter.toSVG(model);



### distort
// distort path 


var circle = new makerjs.paths.Circle(50);
var line = new makerjs.paths.Line([-50,-50], [50, 50]);

//a distorted line is a path, so it should be added to paths
var distortedLine = makerjs.path.distort(line, 4, 1.5);

//a distorted circle is a model, so it should be added to models
var ellipse = makerjs.path.distort(circle, 4, 1.5);

var model = {
  paths: {
    circle: circle,
    line: line,
    distortedLine: distortedLine
  },
  models: {
    ellipse: ellipse
  }
};

var svg = makerjs.exporter.toSVG(model);



### example2: distortion


var star = new makerjs.models.Star(5, 100);
makerjs.model.rotate(star, 18);                  // rotate the star 
var wideStar = makerjs.model.distort(star, 4, 2);  //make the star 4 times wider, and 2 times taller

var model = {
  models: {
    star: star,
    wideStar: wideStar
  }
};

var svg = makerjs.exporter.toSVG(model);

# Rotating
### example3 :  Rotating path

var line1 = new makerjs.paths.Line([0, 0], [100, 0]);
var line2 = new makerjs.paths.Line([0, 0], [100, 0]);
var paths = [line1, makerjs.path.rotate(line2, -30, [100, 0])];
var svg = makerjs.exporter.toSVG(paths);

# example3 : 

var rect1 = new makerjs.models.Rectangle(40, 80);
makerjs.model.rotate(rect1, 45, [0, 0]);
var svg = makerjs.exporter.toSVG(rect1);
document.write(svg);



# cloning
// cloing the path



function sawtooth(numTeeth, r1, rd, offset) {
    var a = 360 / numTeeth;
    var a1 = 90 - a / 2;
    var r2 = r1 + rd;
    var p1 = makerjs.point.fromPolar(makerjs.angle.toRadians(a1), r1);
    var p2 = makerjs.point.rotate(p1, a, [0, 0]);

    var p3 = [-offset, r2];

    this.paths = {
        outer: new makerjs.paths.Arc(p1, p3, r2 / 4, false, false),
        inner: new makerjs.paths.Arc(p2, p3, r1 / 4, false, false)
    };
}

var wheel = { models: {} };
var numTeeth = 30;
var tooth = new sawtooth(numTeeth, 100, 20, 10);

for (var i = 0; i < numTeeth; i++ ) {
    var clone = makerjs.cloneObject(tooth);
    var a = 360 / numTeeth;
    makerjs.model.rotate(clone, a * i, [0, 0]);
    wheel.models[i] = clone;
}

var svg = makerjs.exporter.toSVG(wheel);


# mirreing
// simple path mirror  and modle mirror

makerjs.path.mirror(path: object, mirrorX: boolean, mirrorY: boolean)
makerjs.model.mirror(model: object, mirrorX: boolean, mirrorY: boolean)



var line1 = new makerjs.paths.Line([0, 0], [100, 100]);
var line2 = makerjs.path.mirror(line1, true, false);

var paths = [line1, line2];

var svg = makerjs.exporter.toSVG(paths);




var ovalArc1 = new makerjs.models.OvalArc(45, 135, 50, 10);

var model = {
    models: {
        ovalArc1: ovalArc1,
        ovalArc2: makerjs.model.mirror(ovalArc1, false, true)
    }
};

var svg = makerjs.exporter.toSVG(model);



























































































































































# resourses

https://css-tricks.com/almanac/properties/s/stroke/

var line = new makerjs.paths.Line([0, 0], [50, 50]);
var circle = new makerjs.paths.Circle([0, 0], 50);
var arc1 = new makerjs.paths.Arc([0, 0], 25, 0, 90);
var arc2 = new makerjs.paths.Arc([0, 0], 150, 0, 90);
var arc3 = new makerjs.paths.Arc([0, 0], 150, 90, 180);

var svg = makerjs.exporter.toSVG([line, circle, arc1,arc2,arc3]);
       
