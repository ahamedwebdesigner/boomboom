import Interactive from "https://vectorjs.org/interactive.js";


function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

function add_listners_login_page(){
    alert("I am loaded");
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
}

$(()=>{
    let interactive = new Interactive("my-interactive");
    interactive.window = false;

    interactive.width = 768;
    interactive.height = 150;
    interactive.root.style.border = "1px solid grey";
  
    let control = interactive.control( 0,10);



    // let rectangle = interactive.rectangle(10, 10, 100, 50);
    // rectangle.classList.add('default');

    // 

})
