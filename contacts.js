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
rappel = document.getElementById("rappel");

// Verification de formulaires proposé par Bootstrap
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let formulaires = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(formulaires)
      .forEach
      (function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault() //pour ne pas renouveller la page, mais la vérification aussi disparaît
            event.stopPropagation() //on ne sumbit pas le form si on a les champs qui ne sont pas remplis
            rappel.classList.remove('none'); //message d'erreur
            rappel.classList.add('block');
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
