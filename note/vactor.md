 //add_listners_login_page();
  

//     // Construct an interactive within the HTML element with the id "my-interactive"
// let interactive = new Interactive("my-interactive");
// interactive.window = false;

// interactive.width = 768;
// interactive.height = 150;

// interactive.root.style.border = "1px solid grey";


// let rectangle = interactive.rectangle(10, 10, 100, 50);
// rectangle.classList.add('default');


// // let control = interactive.control( 0, 0);


// //let ellipse = interactive.ellipse( 100, 75, 80, 40);
// //let line = interactive.line( 50, 25, 150, 125);
// // let rectangle = interactive.rectangle( 50, 50, 100, 50);
// let line = interactive.path("M 100 50 Q 100 150 150 50");


let interactive = new Interactive("my-interactive");
interactive.window = false;
interactive.width = 320;
interactive.height = 320;
interactive.originX = interactive.width / 2;
interactive.originY = 125;


// Create a circle
let circle = interactive.circle(0, 0, 100);
circle.classList.add('default');
// Create a control
