const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

var imageRoll = [
    "./images/place1.jpg",
    "./images/place2.jpg",
    "./images/place3.jpg",
    "./images/place4.jpg",
    // "http://static.ddmcdn.com/gif/lightning-gallery-21.jpg"
  ];
  
  var size = imageRoll.length
  var x = Math.floor(size*Math.random())
  document.getElementById('image').src=imageRoll[x];