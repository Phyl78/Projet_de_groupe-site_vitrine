//back-to-top bouton

mybutton = document.getElementById("backtotop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove('none');
    mybutton.classList.add('block');
  } else {
    mybutton.classList.add('none');
    mybutton.classList.remove('block');
  }
}

mybutton.addEventListener('click', function(e){

document.documentElement.scrollTop = 0;
  
})



//mise en fonction formulaire
envoyer = document.getElementById("envoyer");
success = document.getElementById("success");

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault() //pour ne pas renouveller la page, mais la vérification aussi disparaît
            event.stopPropagation() //on ne sumbit pas le form si on a les champs qui ne sont pas remplis
            
          }

          else{
            event.preventDefault() //si touts les champs sont remplis
            success.classList.remove('none');
            success.classList.add('block');
          }

          form.classList.add('was-validated');
        }, false)
      })
  })()

 



  /*FERMETURE POPUP SUCCESS*/

  fermer_success = document.getElementById("fermer_success");

  fermer_success.addEventListener("click", function(e){
      success.classList.remove('block');
      success.classList.add('none');
  })


// function validate() {
      
//     if( document.questionnaire.Name.value == "" ) {
//        alert( "Please provide your name!" );
//        document.questionnaire.Name.focus() ;
//        return false;
//     }
//     if( document.questionnaire.EMail.value == "" ) {
//        alert( "Please provide your Email!" );
//        document.myForm.EMail.focus() ;
//        return false;
//     }
//     if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
//        document.myForm.Zip.value.length != 5 ) {
       
//        alert( "Please provide a zip in the format #####." );
//        document.myForm.Zip.focus() ;
//        return false;
//     }
//     if( document.myForm.Country.value == "-1" ) {
//        alert( "Please provide your country!" );
//        return false;
//     }
//     return( true );
//  }

// envoyer.addEventListener('click', function(e){


// })







// function success(){
//     if (a){
//     mybutton.classList.remove('none');
//      mybutton.classList.add('block');
//   } else(aa) {
//     mybutton.classList.add('none');
//     mybutton.classList.remove('block');
// }

// message=document.getElementById("envoyer");

// message.addEventListener('click',function(e){
//     e.preventDefault();
//     viewPopUp('login', 'typeMessage')
// })


// login.addEventListener('focusout', function(e){
//     localStorage.setItem('feedback', this.value)
// })

// if(localStorage.getItem('feedback')){
//     login.value = localStorage.getItem('feedback');
// }