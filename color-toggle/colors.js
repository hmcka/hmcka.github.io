var button = document.querySelector("button");
var isColor = false;

button.addEventListener("click", function(){
  document.body.style.background = colors();
});

function colors() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}