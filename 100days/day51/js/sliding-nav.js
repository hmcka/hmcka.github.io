$(document).ready(function() {

  var measureMedia = window.matchMedia( "(max-width: 599px)" );

  if (measureMedia.matches) {
    var hamHeight = $('ham-container').outerHeight();

    $('.nav-item').click(function(e) {
    
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - hamHeight
      }, 800);

      e.preventDefault();
    })
  }
  else {
    var headerHeight = $('header').outerHeight();

    $('.nav-item').click(function(e) {
    
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headerHeight
      }, 800);

      e.preventDefault();
    })
  }

  });


