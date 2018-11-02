  //the hamburger menu
  $("#hamburger").click(function() {
    $("#showUpMenu").toggle().style.display="flex";
  });


//Sliding down the section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /*Toggle between adding and removing the "active" class,*/
        /*to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


//Carousel
$(document).ready(function(){
  
  $(".nextLink").on("click", function(event) {
    event.preventDefault();
    var currentActiveImage = $(".article-shown");
    var nextActiveImage = currentActiveImage.next();
    

    if(nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner article").first();
    }

    currentActiveImage.removeClass("article-shown").addClass("article-hidden").css("z-index", -10);
    nextActiveImage.addClass("article-shown").removeClass("article-hidden").css("z-index", 20);
    $(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);
    
  });

  $(".previousLink").on("click", function(event) {
    event.preventDefault();
    var currentActiveImage = $(".article-shown");
    var nextActiveImage = currentActiveImage.next();
    

    if(nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner article").first();
    }

    currentActiveImage.removeClass("article-shown").addClass("article-hidden").css("z-index", -10);
    nextActiveImage.addClass("article-shown").removeClass("article-hidden").css("z-index", 20);
    $(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);
    
  });

});


//alert
var alertButton = document.getElementById('alert');
alertButton.onclick = function() {
    alert('One chick that likes to build things');
}

