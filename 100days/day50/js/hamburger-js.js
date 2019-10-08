$(document).ready(function() {

$("#ham-container").click(function(){
  $(this).toggleClass("active");
  $("#bar1").toggleClass("active");
  $("#bar2").toggleClass("active");
  $("#bar3").toggleClass("active");
  $("#nav").slideToggle("slow");
});

var measureMedia = window.matchMedia( "(max-width: 599px)" );

if (measureMedia.matches) {
  $(".nav-item").click(function(){
    $(this).toggleClass("active");
    $("#bar1").toggleClass("active");
    $("#bar2").toggleClass("active");
    $("#bar3").toggleClass("active");
    $("#nav").slideToggle("slow");
  });
}
});





  