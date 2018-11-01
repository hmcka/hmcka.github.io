$(document).ready(function(){
  
  $(".next-link").on("click", function(event) {
    event.preventDefault();
    var currentActiveImage = $("image-shown");
    var nextActiveImage = currentActiveImage.next();
    

    if(nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner img").first();
    }

    currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
    nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
    $(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);
    
  });

});