function openSection() {
  var sectionGo = document.getElementById("section1");
  var butterflyGo = document.getElementById("disappearButterfly");
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if(isMobile) {
    
    if (sectionGo.style.display === "none") {
      sectionGo.style.display = "block";
      butterflyGo.style.display = "none";

    } else {
      sectionGo.style.display = "none";
      butterflyGo.style.display = "block";
    }
  }
else {
    if (sectionGo.style.display === "none") {
      sectionGo.style.display = "block";
      // butterflyGo.style.display = "none";

    } else {
      sectionGo.style.display = "none";
      // butterflyGo.style.display = "block";
    }
}
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const fadeIns = document.querySelectorAll('.fade-in');

  function checkFade(e) {
    fadeIns.forEach(showArticle => {
      const articleBottom = showArticle.offsetTop + showArticle.clientHeight;
      if(articleBottom) {
        showArticle.classList.add('active');
      } else  {
        showArticle.classList.remove('active');
      }
    })
  }

window.addEventListener('scroll', openSection());
window.addEventListener('scroll', debounce(checkFade));


