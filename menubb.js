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