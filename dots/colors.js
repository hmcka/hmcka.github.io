var dots = document.getElementsByClassName("dot");
var bips = document.getElementsByClassName("bip");
var bops = document.getElementsByClassName("bop");
var isBoop = false;
var isBipNotBop = true;


for(var i = 0; i < dots.length; i++){
  dots[i].addEventListener("click", function(){
    this.style.background = colors();
  });
}

for(var i = 0; i < bips.length; i++){
  bips[i].addEventListener("click", function(){
    if(isBipNotBop){
      this.textContent = "Bop";
    } else {
      this.textContent = "Bip";
    }
    isBipNotBop = !isBipNotBop;
  });
}

for(var i = 0; i < bops.length; i++){
  bops[i].addEventListener("click", function(){
    if(isBipNotBop){
      this.textContent = "Bip";
    } else {
      this.textContent = "Bop";
    }
    isBipNotBop = !isBipNotBop;
  });
}




function colors() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}