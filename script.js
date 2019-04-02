// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(window).scroll(function(){
 var navTop =  $(window).scrollTop();
 $('.model-0').css("top", navTop + 50);
});
