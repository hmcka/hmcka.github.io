const canvas = document.querySelector('#draw');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// var color = "#593862";
strokeColor = document.getElementById("strokeColor"),
// ctx.strokeStyle = color;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.strokeStyle = strokeColor.value;
const inputs = document.querySelectorAll('.controls input');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// var color = "rgb(255,0,0)";
// function change(e){
//     color = this.value;
// }
// document.getElementById("color").onchange = change;



// function handleUpdate() {
//     const suffix = this.dataset.sizing || '';
//     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     console.log(this.value);
//     var color = this.value;
//     return color;
// }

function draw(e) {
    if(!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    // var color = "#BADA55";
    ctx.strokeStyle = strokeColor;

    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
}

function changeStrokeStyle() {
    ctx.strokeStyle = this.value;
    event.stopPropagation();
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
})


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('touchstart', handleUpdate));
inputs.forEach(input => input.addEventListener('touchmove', handleUpdate));
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchcancel', () => isDrawing = false);



inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
strokeColor.addEventListener("input", changeStrokeStyle, false);
